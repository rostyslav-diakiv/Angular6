import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {StewardessesService} from '../services/stewardesses.service';
import {formatDate} from '@angular/common';

@Component({
    selector: 'app-stewardess-edit',
    templateUrl: './stewardess-edit.component.html',
    styleUrls: ['./stewardess-edit.component.css']
})
export class StewardessEditComponent implements OnInit {

    stewForm: FormGroup;
    id = 0;
    // name = '';
    // familyName = '';
   // dateOfBirth: Date;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: StewardessesService,
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
            // let a = formatDate(data.DateOfBirth, 'dd/MM/yyyy', 'en-us');
           // this.dateOfBirth = data.DateOfBirth;
            this.id = data.Id;
            this.stewForm.setValue({
                name: data.Name,
                familyName: data.FamilyName,
                dateOfBirth: data.DateOfBirth
            });
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.updateStewardessForm(this.id, form)
            .subscribe(() => {
                    // const id = res['Id'];
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
