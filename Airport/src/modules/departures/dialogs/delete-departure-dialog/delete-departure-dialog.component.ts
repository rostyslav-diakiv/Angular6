import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {DepartureDto} from '../../../shared/models';
import {DeparturesService} from '../../services/departures.service';

@Component({
  selector: 'app-delete-departure-dialog',
  templateUrl: './delete-departure-dialog.component.html',
  styleUrls: ['./delete-departure-dialog.component.scss']
})
export class DeleteDepartureDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeleteDepartureDialogComponent>,
                private api: DeparturesService,
                @Inject(MAT_DIALOG_DATA) public data: DepartureDto) {
    }

    ngOnInit(): void {
    }

    deleteType(): void {
        this.api.deleteDeparture(this.data.id)
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
