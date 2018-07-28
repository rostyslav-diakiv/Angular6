import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {StewardessesService} from '../services/stewardesses.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-stewardess-create',
    templateUrl: './stewardess-create.component.html',
    styleUrls: ['./stewardess-create.component.scss']
})
export class StewardessCreateComponent implements OnInit {
    stewForm: FormGroup;

    maxDate = new Date(1999, 0, 0);
    minDate = new Date(1900, 0, 0);

    constructor(private router: Router,
                private api: StewardessesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.stewForm = this.formBuilder.group({
            'name': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'familyName': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'dateOfBirth': [null, Validators.required]
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.createStewardessForm(form)
            .subscribe(res => {
                const id = res['id'];
                this.router.navigate(['/stewardesses/details', id]);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }
}
