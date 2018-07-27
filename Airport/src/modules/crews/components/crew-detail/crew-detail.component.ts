import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EditCrewDialogComponent} from '../../dialogs/edit-crew-dialog/edit-crew-dialog.component';
import {DeleteCrewDialogComponent} from '../../dialogs/delete-crew-dialog/delete-crew-dialog.component';
import {MatDialog} from '@angular/material';
import {CrewDto} from '../../../shared/models';
import {CrewsService} from '../../services/crews.service';

@Component({
  selector: 'app-crew-detail',
  templateUrl: './crew-detail.component.html',
  styleUrls: ['./crew-detail.component.scss']
})
export class CrewDetailComponent implements OnInit {

    crewDto: CrewDto;

    constructor(private route: ActivatedRoute,
                private api: CrewsService,
                private router: Router,
                public dialog: MatDialog) { }

    ngOnInit() {
        this.getCrewDto(this.route.snapshot.params['id']);
    }

    getCrewDto(id) {
        this.api.getCrew(id)
            .subscribe(data => {
                console.log(data);
                this.crewDto = data;
            });
    }

    openEditDialog() {
        const dialogRef = this.dialog.open(EditCrewDialogComponent, {
            data: this.crewDto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.getCrewDto(this.crewDto.id);
            }
        });
    }

    openDeleteDialog() {
        const dialogRef = this.dialog.open(DeleteCrewDialogComponent, {
            data: this.crewDto
        });

        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.router.navigate(['/crews']); // go to list
            }
        });
    }
}
