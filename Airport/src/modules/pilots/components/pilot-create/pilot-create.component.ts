import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PilotsService} from '../../services';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-pilot-create',
    templateUrl: './pilot-create.component.html',
    styleUrls: ['./pilot-create.component.scss']
})
export class PilotCreateComponent implements OnInit {
    description = 'Create Pilot';
    pilotForm: FormGroup;
    maxDate = environment.maxBirthDate;
    minDate = environment.minBirthDate;

    constructor(private router: Router,
                private api: PilotsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
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

    onFormSubmit() {
        this.api.createPilot(this.pilotForm)
            .subscribe(res => {
                const id = res['id'];
                this.router.navigate(['/pilots/details', id]);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }
}
