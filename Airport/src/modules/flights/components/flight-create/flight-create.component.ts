import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';
import {MatSnackBar} from '@angular/material';
import {environment} from '../../../../environments/environment';

@Component({
    selector: 'app-flight-create',
    templateUrl: './flight-create.component.html',
    styleUrls: ['./flight-create.component.scss']
})
export class FlightCreateComponent implements OnInit {
    description = 'Create Flight';
    flightForm: FormGroup;

    maxDate = environment.maxFlightDate;
    minDate = environment.minFlightDate;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: FlightsService,
                public snackBar: MatSnackBar,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.flightForm = this.formBuilder.group({
            'number': ['',
                [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
            'departureTime': [null, Validators.required],
            'pointOfDeparture': ['',
                [Validators.required, Validators.minLength(3), Validators.maxLength(49)]],
            'destinationArrivalTime': [null, Validators.required],
            'destination': ['',
                [Validators.required, Validators.minLength(3), Validators.maxLength(49)]],
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
