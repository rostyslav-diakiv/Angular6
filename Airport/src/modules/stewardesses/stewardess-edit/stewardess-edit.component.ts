import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {StewardessesService} from '../services/stewardesses.service';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-stewardess-edit',
    templateUrl: './stewardess-edit.component.html',
    styleUrls: ['./stewardess-edit.component.scss']
})
export class StewardessEditComponent implements OnInit {
    stewForm: FormGroup;
    id = 0;

    maxDate = environment.maxBirthDate;
    minDate = environment.minBirthDate;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: StewardessesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,) {
    }

    ngOnInit() {
        this.getStew(this.route.snapshot.params['id']);
        this.stewForm = this.formBuilder.group({
            'name': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'familyName': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'dateOfBirth': [null, Validators.required]
        });
    }

    getStew(id) {
        this.api.getStewardess(id).subscribe(data => {
            // let a = formatDate(data.dateOfBirth, 'dd/MM/yyyy', 'en-us');
           // this.dateOfBirth = data.dateOfBirth;
            this.id = data.id;
            this.stewForm.setValue({
                name: data.name,
                familyName: data.familyName,
                dateOfBirth: data.dateOfBirth
            });
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.updateStewardessForm(this.id, form)
            .subscribe(() => {
                    this.router.navigate(['/stewardesses/details', this.id]);
                }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                    console.log(err);
                }
            );
    }

    stewardessDetails() {
        this.router.navigate(['/stewardesses/details', this.id]);
    }
}
