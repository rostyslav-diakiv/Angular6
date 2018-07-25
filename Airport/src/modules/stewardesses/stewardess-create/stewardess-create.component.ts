import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {StewardessesService} from '../services/stewardesses.service';

@Component({
  selector: 'app-stewardess-create',
  templateUrl: './stewardess-create.component.html',
  styleUrls: ['./stewardess-create.component.css']
})
export class StewardessCreateComponent implements OnInit {

  stewForm: FormGroup;
  id = 0;
  name = '';
  familyName = '';
  dateOfBirth = new Date();

  constructor(private router: Router, private api: StewardessesService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stewForm = this.formBuilder.group({
        'name': [null, Validators.required],
        'familyName': [null, Validators.required],
        'dateOfBirth': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.createStewardessForm(form)
      .subscribe(res => {
          const id = res['Id'];
          this.router.navigate(['/stewardesses/details', id]);  // /stewardesses/details/id go to details of just created stewardess
        }, (err) => {
          console.log(err);
        });
  }
}
