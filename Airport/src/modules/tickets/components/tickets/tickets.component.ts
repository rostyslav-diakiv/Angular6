import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {TicketsService} from '../../services/tickets.service';
import {CrewDto, TicketDto} from '../../../shared/models';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddTicketDialogComponent} from '../../dialogs/add-ticket-dialog/add-ticket-dialog.component';
import {EditTicketDialogComponent} from '../../dialogs/edit-ticket-dialog/edit-ticket-dialog.component';
import {DeleteTicketDialogComponent} from '../../dialogs/delete-ticket-dialog/delete-ticket-dialog.component';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
    tickets: TicketDto[] = [];
    displayedColumns = ['id', 'price', 'flight', 'actions'];
    dataSource = new TicketDataSource(this.api);

    constructor(private router: Router,
                private api: TicketsService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.api.getTickets()
            .subscribe(res => {
                console.log(res);
                this.tickets = res;
            }, err => {
                console.log(err);
            });
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddTicketDialogComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TicketDataSource(this.api);
            }
        });
    }

    openEditDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(EditTicketDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TicketDataSource(this.api);
            }
        });
    }

    openDeleteDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(DeleteTicketDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TicketDataSource(this.api);
            }
        });
    }

    redirectToDetails(id: number) {
        this.router.navigate(['/tickets/details', id]);
    }
}

export class TicketDataSource extends DataSource<any> {
    constructor(private api: TicketsService) {
        super();
    }

    connect() {
        return this.api.getTickets();
    }

    disconnect() {

    }
}
