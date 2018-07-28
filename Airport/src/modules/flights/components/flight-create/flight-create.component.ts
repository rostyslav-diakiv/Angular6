import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FlightsService} from '../../services/flights.service';

@Component({
    selector: 'app-flight-create',
    templateUrl: './flight-create.component.html',
    styleUrls: ['./flight-create.component.scss']
})
export class FlightCreateComponent implements OnInit {
    flightForm: FormGroup;
    number = '0';

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: FlightsService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getBook(this.route.snapshot.params['id']);
        this.flightForm = this.formBuilder.group({
            'number': ['', Validators.required],
            'departureTime': [Validators.required],
            'pointOfDeparture': [null, Validators.required],
            'destinationArrivalTime': [Validators.required],
            'destination': [null, Validators.required]
        });
    }

    getBook(id) {
        this.api.getFlight(id).subscribe(data => {
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
       // const flight = Object.assign({}, this.flightForm.value);
        this.api.createFlightForm(this.flightForm.value)
            .subscribe((res) => {
                const id = res['id'];
                this.router.navigate(['/flights/details', id]);
                }, (err) => {
                    console.log(err);
                }
            );
    }
}
