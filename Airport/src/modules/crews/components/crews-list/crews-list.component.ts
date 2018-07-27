import {Component, OnInit} from '@angular/core';
import {CrewDto} from '../../../shared/models';
import {AddCrewDialogComponent} from '../../dialogs/add-crew-dialog/add-crew-dialog.component';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {MatDialog} from '@angular/material';
import {EditCrewDialogComponent} from '../../dialogs/edit-crew-dialog/edit-crew-dialog.component';
import {DeleteCrewDialogComponent} from '../../dialogs/delete-crew-dialog/delete-crew-dialog.component';
import {CrewsService} from '../../services/crews.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-types-list',
  templateUrl: './crews-list.component.html',
  styleUrls: ['./crews-list.component.scss']
})
export class CrewsListComponent implements OnInit {
    crews: CrewDto[] = [];
    displayedColumns = ['id', 'pilot', 'stewardesses', 'actions'];
    dataSource = new TypesDataSource(this.api);

    constructor(private router: Router,
                private api: CrewsService,
                public dialog: MatDialog) {
    }

    ngOnInit() {
        this.api.getCrews()
            .subscribe(res => {
                console.log(res);
                this.crews = res;
            }, err => {
                console.log(err);
            });
    }

    openAddDialog(): void {
        const dialogRef = this.dialog.open(AddCrewDialogComponent, { });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openEditDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(EditCrewDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    openDeleteDialog(dto: CrewDto) {
        const dialogRef = this.dialog.open(DeleteCrewDialogComponent, {
            data: dto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.dataSource = new TypesDataSource(this.api);
            }
        });
    }

    redirectToDetails(id: number) {
        this.router.navigate(['/crews/details', id]);
    }
}

export class TypesDataSource extends DataSource<any> {
    constructor(private api: CrewsService) {
        super();
    }

    connect(): Observable<CrewDto[]> {
        return this.api.getCrews();
    }

    disconnect() {
    }
}
