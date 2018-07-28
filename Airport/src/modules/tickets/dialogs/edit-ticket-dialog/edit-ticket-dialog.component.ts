import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FlightDto, TicketDto} from '../../../shared/models';
import {Router} from '@angular/router';
import {TicketsService} from '../../services/tickets.service';
import {FlightsService} from '../../../flights/services/flights.service';

@Component({
    selector: 'app-edit-ticket-dialog',
    templateUrl: './edit-ticket-dialog.component.html',
    styleUrls: ['./edit-ticket-dialog.component.scss']
})
export class EditTicketDialogComponent implements OnInit {
    description = 'Edit Ticket #: ';
    ticketForm: FormGroup;
    id = 0;
    flights: FlightDto[] = [];

    constructor(private router: Router,
                private ticketsService: TicketsService,
                private flightsService: FlightsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<EditTicketDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TicketDto) {
    }

    ngOnInit() {
        this.id = this.data.id;
        this.description += this.id;
        this.ticketForm = this.formBuilder.group({
            'price': [this.data.price, [Validators.required, Validators.min(6), Validators.max(99999)]],
            'flight': [null, Validators.required],
        });

        this.flightsService.getFlights()
            .subscribe(value => {
                    if (this.data.flight) {
                        this.ticketForm.patchValue({
                            flight: value.filter(p => p.number === this.data.flight.number)[0]
                        });
                    }

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
        this.ticketsService.updateTicketForm(this.id, this.ticketForm)
            .subscribe(() => {
                this.dialogRef.close(true);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
