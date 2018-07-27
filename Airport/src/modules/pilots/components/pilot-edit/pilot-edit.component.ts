import {
    Component,
    OnInit,
    AfterViewInit,
    OnDestroy,
    ViewChildren,
    ElementRef
} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControlName} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {merge} from 'rxjs';
import {fromEvent, Observable, Subscription} from 'rxjs';
import {debounceTime, map} from 'rxjs/operators';

import {GenericValidator} from '../../../shared/helpers/validators';
import {PilotDto} from '../../../shared/models';
import {PilotsService} from '../../services';

@Component({
    selector: 'app-pilot-edit',
    templateUrl: './pilot-edit.component.html',
    styleUrls: ['./pilot-edit.component.scss']
})
export class PilotEditComponent implements OnInit, AfterViewInit, OnDestroy { // TODO: Add resolver here and filter query parameter
    @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

    public displayMessage: { [key: string]: string } = {};
    public pageTitle = 'Pilot Edit';
    public errorMessage: string;
    public pilotForm: FormGroup;
    public pilot: PilotDto;
    private sub: Subscription;
    private readonly validationMessages: { [key: string]: { [key: string]: string } };
    private genericValidator: GenericValidator;

    constructor(private fb: FormBuilder,
                private route: ActivatedRoute,
                private router: Router,
                private _pilotsService: PilotsService) {
        // Defines all of the validation messages for the form.
        // These could instead be retrieved from a file or database.
        this.validationMessages = {
            Name: {
                required: 'Product name is required.',
                minlength: 'Product name must be at least two characters.',
                maxlength: 'Product name cannot exceed 50 characters.'
            },
            FamilyName: {
                range: 'Max Length of Description is 500 characters'
            },
            Experience: {
                required: 'price is required.',
                range: 'price of the product must be between 1 (min) and 1000000 (max).'
            },
            DateOfBirth: {
                required: 'Type of Subscription is required',
                range: 'Type of Subscription must be Limited or Unlimited',
            }
        };

        // Define an instance of the validator for use with this form,
        // passing in this form's set of validation messages.
        this.genericValidator = new GenericValidator(this.validationMessages);
    }

    ngOnInit(): void {
        this.pilotForm = this.fb.group({
            Name: ['', [Validators.required,
                Validators.minLength(2),
                Validators.maxLength(50)]],
            FamilyName: ['', [Validators.required,
                Validators.minLength(2),
                Validators.maxLength(50)]],
            Experience: ['0', [Validators.minLength(2),
                Validators.maxLength(50)]], // days
            DateOfBirth: [null, [Validators.required]], // TODO: validate date , set default value
        });

        // Watch for changes to the resolve data
        this.route.data.subscribe(data => {
            this.onPilotRetrieved(data['pilot']);
        });

        // Read the product id from the route parameter
        // this.sub = this.route.params.subscribe(
        //     params => {
        //         const id = params['id'];
        //         this.getProduct(id);
        //     }
        // );
    }

    ngOnDestroy(): void {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    }

    ngAfterViewInit(): void {
        // Watch for the blur event from any input element on the form.
        const controlBlurs: Observable<any>[] = this.formInputElements
            .map((formControl: ElementRef) => {
                const obs = fromEvent(formControl.nativeElement, 'blur')
                    .pipe(map((e: any) => e.target.value)); // extract the value of the input

                return obs;
            });

        // Merge the blur event observable with the valueChanges observable
        merge(this.pilotForm.valueChanges, ...controlBlurs)
            .pipe(debounceTime(800))
            .subscribe(value => {
                this.displayMessage = this.genericValidator.processMessages(this.pilotForm);
            });
    }

    getProduct(id: number): void {
        this._pilotsService.getPilot(id)
            .subscribe(
                (pilot: PilotDto) => this.onPilotRetrieved(pilot),
                (error: any) => this.errorMessage = <any>error
            );
    }

    onPilotRetrieved(pilot: PilotDto): void {
        if (this.pilotForm) {
            this.pilotForm.reset();
        }
        this.pilot = pilot;

        if (this.pilot.id === 0) {
            this.pageTitle = 'Add Pilot';
        } else {
            this.pageTitle = `Edit Pilot: ${this.pilot.name}`;
        }

        // Update the data on the form
        this.pilotForm.patchValue({
            Name: this.pilot.name,
            FamilyName: this.pilot.familyName,
            Experience: this.pilot.experienceAge,
            DateOfBirth: this.pilot.dateOfBirth
        });
    }

    deletePilot(): void {
        if (this.pilot.id === 0) {
            // Don't delete, it was never saved.
            this.onSaveComplete();
        } else {
            if (confirm(`Really delete the pilot: ${this.pilot.name}?`)) {
                this._pilotsService.deletePilot(this.pilot.id)
                    .subscribe(
                        () => this.onSaveComplete(),
                        (error: any) => this.errorMessage = <any>error
                    );
            }
        }
    }

    savePilot(): void {
        if (this.pilotForm.dirty && this.pilotForm.valid) {
            // Copy the form values over the product object values
            const p = Object.assign({}, this.pilot, this.pilotForm.value);
            this._pilotsService.savePilot(p)
                .subscribe(
                    () => this.onSaveComplete(),
                    (error: any) => this.errorMessage = <any>error
                );
        } else if (!this.pilotForm.dirty) {
            this.onSaveComplete();
        }
    }

    onSaveComplete(): void {
        // Reset the form to clear the flags
        this.pilotForm.reset();
        this.router.navigate(['/pilots']);
    }
}
