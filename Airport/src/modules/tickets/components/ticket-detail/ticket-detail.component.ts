import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {TicketsService} from '../../services/tickets.service';
import {TicketDto} from '../../../shared/models';
import {MatDialog, MatSnackBar} from '@angular/material';
import {EditTicketDialogComponent} from '../../dialogs/edit-ticket-dialog/edit-ticket-dialog.component';
import {DeleteTicketDialogComponent} from '../../dialogs/delete-ticket-dialog/delete-ticket-dialog.component';

@Component({
    selector: 'app-ticket-detail',
    templateUrl: './ticket-detail.component.html',
    styleUrls: ['./ticket-detail.component.scss']
})
export class TicketDetailComponent implements OnInit {

    ticket: TicketDto;

    constructor(private route: ActivatedRoute,
                private api: TicketsService,
                private router: Router,
                public snackBar: MatSnackBar,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.getTicketDetails(this.route.snapshot.params['id']);
    }

    getTicketDetails(id) {
        this.api.getTicket(id)
            .subscribe(data => {
                console.log(data);
                this.ticket = data;
            });
    }

    openEditDialog() {
        const dialogRef = this.dialog.open(EditTicketDialogComponent, {
            data: this.ticket
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getTicketDetails(this.ticket.id);
            }
        });
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeleteTicketDialogComponent, {
            data: this.ticket
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/tickets']);
            }
        });
    }
}
