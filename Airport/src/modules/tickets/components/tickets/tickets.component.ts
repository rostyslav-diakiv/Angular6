import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {TicketsService} from '../../services/tickets.service';
import {CrewDto, TicketDto} from '../../../shared/models';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {AddPlaneDialogComponent} from '../../../planes/dialogs/add-plane-dialog/add-plane-dialog.component';
import {EditPlaneDialogComponent} from '../../../planes/dialogs/edit-plane-dialog/edit-plane-dialog.component';
import {DeletePlaneDialogComponent} from '../../../planes/dialogs/delete-plane-dialog/delete-plane-dialog.component';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
    tickets: TicketDto[] = [];
    displayedColumns = ['id', 'price', 'flight'];
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
        const dialogRef = this.dialog.open(AddPlaneDialogComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TicketDataSource(this.api);
            }
        });
    }

    openEditDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(EditPlaneDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TicketDataSource(this.api);
            }
        });
    }

    openDeleteDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(DeletePlaneDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TicketDataSource(this.api);
            }
        });
    }

    redirectToDetails(id: number) {
        this.router.navigate(['/planes/details', id]);
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
