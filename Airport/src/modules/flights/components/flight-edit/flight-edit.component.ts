import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-flight-edit',
    templateUrl: './flight-edit.component.html',
    styleUrls: ['./flight-edit.component.scss']
})
export class FlightEditComponent implements OnInit {
    description = 'Edit flight #: ';
    number = '0';
    flightForm: FormGroup;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: FlightsService,
                public snackBar: MatSnackBar,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getBook(this.route.snapshot.params['id']);
        this.flightForm = this.formBuilder.group({
            'number': [{value: '', disabled: true}, Validators.required],
            'departureTime': [Validators.required],
            'pointOfDeparture': [null, Validators.required],
            'destinationArrivalTime': [Validators.required],
            'destination': [null, Validators.required]
        });
    }

    getBook(id) {
        this.api.getFlight(id).subscribe(data => {
            this.description += data.number;
            this.number = data.number;
            this.flightForm.setValue({
                number: data.number,
                departureTime: data.departureTime,
                pointOfDeparture: data.pointOfDeparture,
                destinationArrivalTime: data.destinationArrivalTime,
                destination: data.destination
            });
        });
    }

    onFormSubmit() {
        const flight = Object.assign({}, this.flightForm.value);
        this.api.updateFlightForm(this.number, flight)
            .subscribe(() => {
                    this.router.navigate(['/flights/details', this.number]);
                }, (err) => {
                    this.snackBar.open('Model is invalid', 'Ok', {
                        duration: 2000,
                    });
                    console.log(err);
                }
            );
    }

    flightDetails() {
        this.router.navigate(['/flights/details', this.number]);
    }
}
