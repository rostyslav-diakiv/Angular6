import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {FlightsService} from '../../services/flights.service';

@Component({
  selector: 'app-flight-create',
  templateUrl: './flight-create.component.html',
  styleUrls: ['./flight-create.component.css']
})
export class FlightCreateComponent implements OnInit {
  stewForm: FormGroup;
  id = 0;

  constructor(private router: Router, private api: FlightsService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.stewForm = this.formBuilder.group({
        'name': [null, Validators.required],
        'familyName': [null, Validators.required],
        'dateOfBirth': [null, Validators.required]
    });
  }

  onFormSubmit(form: NgForm) {
    this.api.createFlightForm(form)
      .subscribe(res => {
          const id = res['id'];
          this.router.navigate(['/flights/details', id]);  // /flights/details/id go to details of just created flights
        }, (err) => {
          console.log(err);
        });
  }
}
