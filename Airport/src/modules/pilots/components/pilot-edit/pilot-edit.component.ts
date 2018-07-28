import {
    Component,
    OnInit,
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PilotsService} from '../../services';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-pilot-edit',
    templateUrl: './pilot-edit.component.html',
    styleUrls: ['./pilot-edit.component.scss']
})
export class PilotEditComponent implements OnInit {
    description = 'Edit Pilot #: ';
    pilotForm: FormGroup;
    id = 0;
    maxDate = environment.maxBirthDate;
    minDate = environment.minBirthDate;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: PilotsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.getPilot(this.route.snapshot.params['id']);
        this.pilotForm = this.formBuilder.group({
            'name': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'familyName': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'dateOfBirth': [null, Validators.required],
            'experience': [0,
                [Validators.required, Validators.min(environment.minExperienceDays), Validators.max(environment.maxExperienceDays)]],
        });
    }

    getPilot(id) {
        this.api.getPilot(id).subscribe(data => {
            this.description += data.id;
            this.id = data.id;
            const expInDays = (data.experienceAge.years * 365) + (data.experienceAge.months * 30) + data.experienceAge.days;
            this.pilotForm.patchValue({
                name: data.name,
                familyName: data.familyName,
                experience: expInDays,
                dateOfBirth: data.dateOfBirth
            });
        });
    }

    onFormSubmit() {
        this.api.updatePilot(this.id, this.pilotForm)
            .subscribe(() => {
                this.router.navigate(['/pilots/details', this.id]);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }
}
