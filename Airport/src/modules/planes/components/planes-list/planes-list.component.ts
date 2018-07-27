import {Component, OnInit} from '@angular/core';
import {CrewDto, PlaneDto} from '../../../shared/models';
import {AddPlaneDialogComponent} from '../../dialogs/add-plane-dialog/add-plane-dialog.component';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {EditPlaneDialogComponent} from '../../dialogs/edit-plane-dialog/edit-plane-dialog.component';
import {DeletePlaneDialogComponent} from '../../dialogs/delete-plane-dialog/delete-plane-dialog.component';
import {PlanesService} from '../../services/planes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-planes-list',
  templateUrl: './planes-list.component.html',
  styleUrls: ['./planes-list.component.scss']
})
export class PlanesListComponent implements OnInit {
    planes: PlaneDto[] = [];
    displayedColumns = ['id', 'name', 'creationDate', 'lifeTimeAge', 'planeType', 'actions'];
    dataSource = new TypesDataSource(this.api);

    constructor(private router: Router,
                private api: PlanesService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.api.getPlanes()
            .subscribe(res => {
                console.log(res);
                this.planes = res;
            }, err => {
                console.log(err);
            });
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddPlaneDialogComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openEditDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(EditPlaneDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openDeleteDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(DeletePlaneDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    redirectToDetails(id: number) {
        this.router.navigate(['/planes/details', id]);
    }
}

export class TypesDataSource extends DataSource<any> {
    constructor(private api: PlanesService) {
        super();
    }

    connect(): Observable<PlaneDto[]> {
        return this.api.getPlanes();
    }

    disconnect() {
    }
}
