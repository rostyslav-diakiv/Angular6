import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {StewardessesService} from '../services/stewardesses.service';

@Component({
  selector: 'app-stewardess-create',
  templateUrl: './stewardess-create.component.html',
  styleUrls: ['./stewardess-create.component.scss']
})
export class StewardessCreateComponent implements OnInit {
  stewForm: FormGroup;
  id = 0;

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
          const id = res['id'];
          this.router.navigate(['/types/details', id]);  // /flights/details/id go to details of just created flights
        }, (err) => {
          console.log(err);
        });
  }
}
