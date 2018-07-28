import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../../services/tickets.service';
import {FlightDto} from '../../../shared/models';
import {FlightsService} from '../../../flights/services/flights.service';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-ticket-edit',
    templateUrl: './ticket-edit.component.html',
    styleUrls: ['./ticket-edit.component.scss']
})
export class TicketEditComponent implements OnInit {
    ticketForm: FormGroup;
    flights: FlightDto[] = [];

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: TicketsService,
                private flightsService: FlightsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar) {
    }

    ngOnInit() {
        this.getTicketDetails(this.route.snapshot.params['id']);
        this.ticketForm = this.formBuilder.group({
            'price': [0, [Validators.required, Validators.min(5), Validators.max(100000)]],
            'flightControl': [null, Validators.required],
        });
    }

    getTicketDetails(id) {
        this.api.getTicket(id)
            .subscribe(data => {
                this.ticketForm.patchValue({
                    price: data.price,
                });
                this.flightsService.getFlights()
                    .subscribe(value => {
                            this.ticketForm.patchValue({
                                flightControl: value.filter(f => f.number === data.flight.number)[0]
                            });
                            this.flights = value;
                        },
                        err => {
                            this.snackBar.open('Oops! Error happened', 'Ok', {
                                duration: 2000,
                            });
                            console.log(err);
                        });
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
