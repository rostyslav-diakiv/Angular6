import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {FlightsService} from '../services/flights.service';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-stewardess-edit',
    templateUrl: './stewardess-edit.component.html',
    styleUrls: ['./stewardess-edit.component.css']
})
export class StewardessEditComponent implements OnInit {

    stewForm: FormGroup;
    id = 0;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: FlightsService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getBook(this.route.snapshot.params['id']);
        this.stewForm = this.formBuilder.group({
            'name': [null, Validators.required],
            'familyName': [null, Validators.required],
            'dateOfBirth': [Validators.required]
        });
    }

    getBook(id) {
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
                    // const id = res['id'];
                    this.router.navigate(['/stewardesses/details', this.id]); //  -- go to details of just updated entity
                }, (err) => {
                    console.log(err);
                }
            );
    }

    bookDetails() {
        this.router.navigate(['/stewardesses/details', this.id]); // -- go to details of entity
    }
}
