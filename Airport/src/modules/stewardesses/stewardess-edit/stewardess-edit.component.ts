import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {StewardessesService} from '../services/stewardesses.service';
import {formatDate} from '@angular/common';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-stewardess-edit',
    templateUrl: './stewardess-edit.component.html',
    styleUrls: ['./stewardess-edit.component.scss']
})
export class StewardessEditComponent implements OnInit {
    stewForm: FormGroup;
    id = 0;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: StewardessesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,) {
    }

    ngOnInit() {
        this.getStew(this.route.snapshot.params['id']);
        this.stewForm = this.formBuilder.group({
            'name': [null, Validators.required],
            'familyName': [null, Validators.required],
            'dateOfBirth': [Validators.required]
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
