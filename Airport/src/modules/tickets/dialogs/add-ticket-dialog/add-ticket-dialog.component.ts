import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {FlightDto, TicketDto} from '../../../shared/models';
import {TicketsService} from '../../services/tickets.service';
import {FlightsService} from '../../../flights/services/flights.service';

@Component({
    selector: 'app-add-ticket-dialog',
    templateUrl: './add-ticket-dialog.component.html',
    styleUrls: ['./add-ticket-dialog.component.scss']
})
export class AddTicketDialogComponent implements OnInit {
    description = 'Create Ticket';
    ticketForm: FormGroup;
    flights: FlightDto[] = [];

    constructor(private router: Router,
                private ticketsService: TicketsService,
                private flightsService: FlightsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<AddTicketDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: TicketDto) {
    }

    ngOnInit() {
        this.ticketForm = this.formBuilder.group({
            'price': [0, [Validators.required, Validators.min(6), Validators.max(99999)]],
            'flight': [null, Validators.required],
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
        this.ticketsService.createTicketForm(this.ticketForm)
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
