import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EditPlaneDialogComponent} from '../../dialogs/edit-plane-dialog/edit-plane-dialog.component';
import {DeletePlaneDialogComponent} from '../../dialogs/delete-plane-dialog/delete-plane-dialog.component';
import {MatDialog} from '@angular/material';
import {CrewDto, PlaneDto} from '../../../shared/models';
import {PlanesService} from '../../services/planes.service';

@Component({
  selector: 'app-plane-detail',
  templateUrl: './plane-detail.component.html',
  styleUrls: ['./plane-detail.component.scss']
})
export class PlaneDetailComponent implements OnInit {
    plane: PlaneDto;

    constructor(private route: ActivatedRoute,
                private api: PlanesService,
                private router: Router,
                public dialog: MatDialog) { }

    ngOnInit() {
        this.getCrewDto(this.route.snapshot.params['id']);
    }

    getCrewDto(id) {
        this.api.getPlane(id)
            .subscribe(data => {
                console.log(data);
                this.plane = data;
            });
    }

    openEditDialog() {
        const dialogRef = this.dialog.open(EditPlaneDialogComponent, {
            data: this.plane
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getCrewDto(this.plane.id);
            }
        });
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeletePlaneDialogComponent, {
            data: this.plane
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/planes']);
            }
        });
    }
}
