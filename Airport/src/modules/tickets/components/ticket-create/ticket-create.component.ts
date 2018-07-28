import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../../services/tickets.service';
import {FlightDto} from '../../../shared/models';
import {FlightsService} from '../../../flights/services/flights.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-ticket-create',
    templateUrl: './ticket-create.component.html',
    styleUrls: ['./ticket-create.component.scss']
})
export class TicketCreateComponent implements OnInit {
    ticketForm: FormGroup;
    flights: FlightDto[] = [];

    constructor(private router: Router,
                private api: TicketsService,
                private flightsService: FlightsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.ticketForm = this.formBuilder.group({
            'price': [0, Validators.required],
            'flightControl': [null, Validators.required]
        });

        this.flightsService.getFlights()
            .subscribe(value => {
                    this.flights = value;
                },
                err => {
                    this.snackBar.open('Oops! Error happened', 'Ok', {
                        duration: 2000,
                    });
                    console.log(err);
                });
    }

    onFormSubmit() {
        console.log(this.ticketForm);
        this.api.createTicketForm(this.ticketForm)
            .subscribe(res => {
                const id = res['id'];
                this.router.navigate(['/tickets/details', id]);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }
}
