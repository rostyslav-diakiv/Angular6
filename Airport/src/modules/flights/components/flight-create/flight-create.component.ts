import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-flight-create',
    templateUrl: './flight-create.component.html',
    styleUrls: ['./flight-create.component.scss']
})
export class FlightCreateComponent implements OnInit {
    description = 'Create Flight';
    flightForm: FormGroup;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: FlightsService,
                public snackBar: MatSnackBar,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.flightForm = this.formBuilder.group({
            'number': ['', Validators.required],
            'departureTime': [null, Validators.required],
            'pointOfDeparture': [null, Validators.required],
            'destinationArrivalTime': [null, Validators.required],
            'destination': [null, Validators.required]
        });
    }

    onFormSubmit() {
        this.api.createFlightForm(this.flightForm.value)
            .subscribe((res) => {
                const number = res['number'];
                this.router.navigate(['/flights/details', number]);
                }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                    console.log(err);
                }
            );
    }
}
