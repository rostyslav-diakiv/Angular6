import { Component, OnInit } from '@angular/core';
import {PlaneTypeDto} from '../../shared/models';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaneTypesService} from '../services/plane-types.service';
import {EditPlaneTypeDialogComponent} from '../dialogs/edit-plane-type-dialog/edit-plane-type-dialog.component';
import {DeletePlaneTypeDialogComponent} from '../dialogs/delete-plane-type-dialog/delete-plane-type-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-plane-type-detail',
  templateUrl: './plane-type-detail.component.html',
  styleUrls: ['./plane-type-detail.component.scss']
})
export class PlaneTypeDetailComponent implements OnInit {

    typeDto: PlaneTypeDto;

    constructor(private route: ActivatedRoute,
                private api: PlaneTypesService,
                private router: Router,
                public dialog: MatDialog) { }

    ngOnInit() {
        this.getStewardessDetails(this.route.snapshot.params['id']);
    }

    getStewardessDetails(id) {
        this.api.getPlaneType(id)
            .subscribe(data => {
                console.log(data);
                this.typeDto = data;
            });
    }

    openEditDialog() {
        const dialogRef = this.dialog.open(EditPlaneTypeDialogComponent, {
            data: this.typeDto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getStewardessDetails(this.typeDto.id);
            }
        });
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeletePlaneTypeDialogComponent, {
            data: this.typeDto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/planeTypes']); // go to list
            }
        });
    }
}
