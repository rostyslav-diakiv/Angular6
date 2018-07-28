import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {TicketsService} from '../../services/tickets.service';
import {TicketDto} from '../../../shared/models';

@Component({
  selector: 'app-delete-ticket-dialog',
  templateUrl: './delete-ticket-dialog.component.html',
  styleUrls: ['./delete-ticket-dialog.component.scss']
})
export class DeleteTicketDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeleteTicketDialogComponent>,
                private api: TicketsService,
                @Inject(MAT_DIALOG_DATA) public data: TicketDto,
                public snackBar: MatSnackBar) {
    }

    ngOnInit(): void {
    }

    deleteType(): void {
        this.api.deleteTicket(this.data.id)
            .subscribe(() => {
                this.dialogRef.close(true);
            }, (err) => {
                this.snackBar.open('Oops! Error happened', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
