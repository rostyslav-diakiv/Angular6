import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {CrewDto} from '../../../shared/models';
import {CrewsService} from '../../services/crews.service';

@Component({
  selector: 'app-delete-crew-dialog',
  templateUrl: './delete-crew-dialog.component.html',
  styleUrls: ['./delete-crew-dialog.component.scss']
})
export class DeleteCrewDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeleteCrewDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CrewDto,
                private api: CrewsService) { }

    ngOnInit(): void {
    }

    deleteType(): void {
        this.api.deleteCrew(this.data.id)
            .subscribe(res => {
                this.dialogRef.close(true);
            }, (err) => {
                console.log(err);
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
