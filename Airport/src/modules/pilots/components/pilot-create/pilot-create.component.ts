import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import {PilotsService} from '../../services';
@Component({
  selector: 'app-pilot-create',
  templateUrl: './pilot-create.component.html',
  styleUrls: ['./pilot-create.component.scss']
})
export class PilotCreateComponent implements OnInit {
  pilotForm: FormGroup;
  id = 0;

  constructor(private router: Router,
              private api: PilotsService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.pilotForm = this.formBuilder.group({
        'name': ['', Validators.required],
        'familyName': ['', Validators.required],
        'experience': [0, Validators.required],
        'dateOfBirth': [null, Validators.required]
    });
  }

  onFormSubmit() {
    this.api.createPilot(this.pilotForm)
      .subscribe(res => {
          const id = res['id'];
          this.router.navigate(['/pilots/details', id]);  // /flights/details/id go to details of just created flights
        }, (err) => {
          console.log(err);
        });
  }
}
