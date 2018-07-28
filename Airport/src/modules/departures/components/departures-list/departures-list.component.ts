import {Component, OnInit} from '@angular/core';
import {CrewDto, DepartureDto} from '../../../shared/models';
import {AddDepartureDialogComponent} from '../../dialogs/add-departure-dialog/add-departure-dialog.component';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {EditDepartureDialogComponent} from '../../dialogs/edit-departure-dialog/edit-departure-dialog.component';
import {DeleteDepartureDialogComponent} from '../../dialogs/delete-departure-dialog/delete-departure-dialog.component';
import {DeparturesService} from '../../services/departures.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-departures-list',
  templateUrl: './departures-list.component.html',
  styleUrls: ['./departures-list.component.scss']
})
export class DeparturesListComponent implements OnInit {
    departure: DepartureDto[] = [];
    displayedColumns = ['id', 'departureTime', 'flightNumber', 'crewId', 'planeName', 'actions'];
    dataSource = new TypesDataSource(this.api);

    constructor(private router: Router,
                private api: DeparturesService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.api.getDepartures()
            .subscribe(res => {
                console.log(res);
                this.departure = res;
            }, err => {
                console.log(err);
            });
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddDepartureDialogComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openEditDialog(dto: DepartureDto) {
        const dialogRef = this.dialog.open(EditDepartureDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openDeleteDialog(dto: DepartureDto) {
        const dialogRef = this.dialog.open(DeleteDepartureDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    redirectToDetails(id: number) {
        this.router.navigate(['/departures/details', id]);
    }
}

export class TypesDataSource extends DataSource<any> {
    constructor(private api: DeparturesService) {
        super();
    }

    connect(): Observable<DepartureDto[]> {
        return this.api.getDepartures();
    }

    disconnect() {
    }
}
