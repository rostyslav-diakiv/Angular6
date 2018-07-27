import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TicketsService} from '../../services/tickets.service';
import {FlightDto, TicketDto} from '../../../shared/models';
import {FlightsService} from '../../../shared/services/flights.service';

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
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getTicketDetails(this.route.snapshot.params['id']);
        this.ticketForm = this.formBuilder.group({
            'price': [0, Validators.required],
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
                            // filter and except that are already picked)
                            this.flights = value; // .filter(value1 => value1.number !== this.selectedFlight.number);
                        },
                        error1 => {
                            console.log(error1);
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
                console.log(err);
            });
    }
}
