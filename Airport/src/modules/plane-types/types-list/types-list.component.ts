import {Component, OnInit} from '@angular/core';
import {PlaneTypeDto} from '../../shared/models';
import {AddPlaneTypeDialogComponent} from '../dialogs/add-plane-type-dialog/add-plane-type-dialog.component';
import {PlaneTypesService} from '../services/plane-types.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {EditPlaneTypeDialogComponent} from '../dialogs/edit-plane-type-dialog/edit-plane-type-dialog.component';
import {DeletePlaneTypeDialogComponent} from '../dialogs/delete-plane-type-dialog/delete-plane-type-dialog.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-types-list',
  templateUrl: './types-list.component.html',
  styleUrls: ['./types-list.component.scss']
})
export class TypesListComponent implements OnInit {
    stewardesses: PlaneTypeDto[] = [];
    displayedColumns = ['id', 'planeModel', 'maximalNumberOfPlaces', 'maximalCarryingCapacityKg', 'actions'];
    dataSource = new TypesDataSource(this.api);

    constructor(private router: Router,
        private api: PlaneTypesService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.api.getPlaneTypes()
            .subscribe(res => {
                console.log(res);
                this.stewardesses = res;
            }, err => {
                console.log(err);
            });
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddPlaneTypeDialogComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openEditDialog(dto: PlaneTypeDto) {
        const dialogRef = this.dialog.open(EditPlaneTypeDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openDeleteDialog(dto: PlaneTypeDto) {
        const dialogRef = this.dialog.open(DeletePlaneTypeDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    redirectToDetails(id: number) {
        this.router.navigate(['/planeTypes/details', id]);
    }
}

export class TypesDataSource extends DataSource<any> {
    constructor(private api: PlaneTypesService) {
        super();
    }

    connect(): Observable<PlaneTypeDto[]> {
        return this.api.getPlaneTypes();
    }

    disconnect() {
    }
}
