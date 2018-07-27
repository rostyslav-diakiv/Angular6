import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EditDepartureDialogComponent} from '../../dialogs/edit-departure-dialog/edit-departure-dialog.component';
import {DeleteDepartureDialogComponent} from '../../dialogs/delete-departure-dialog/delete-departure-dialog.component';
import {MatDialog} from '@angular/material';
import {DepartureDto, PlaneDto} from '../../../shared/models';
import {DeparturesService} from '../../services/departures.service';

@Component({
  selector: 'app-departure-detail',
  templateUrl: './departure-detail.component.html',
  styleUrls: ['./departure-detail.component.scss']
})
export class DepartureDetailComponent implements OnInit {
    departure: DepartureDto;

    constructor(private route: ActivatedRoute,
                private api: DeparturesService,
                private router: Router,
                public dialog: MatDialog) { }

    ngOnInit() {
        this.getDepartureDto(this.route.snapshot.params['id']);
    }

    getDepartureDto(id) {
        this.api.getDeparture(id)
            .subscribe(data => {
                console.log(data);
                this.departure = data;
            });
    }

    openEditDialog() {
        const dialogRef = this.dialog.open(EditDepartureDialogComponent, {
            data: this.departure
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getDepartureDto(this.departure.id);
            }
        });
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeleteDepartureDialogComponent, {
            data: this.departure
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/departures']);
            }
        });
    }
}
