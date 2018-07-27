import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PlaneDto} from '../../../shared/models';
import {PlanesService} from '../../services/planes.service';

@Component({
  selector: 'app-delete-plane-dialog',
  templateUrl: './delete-plane-dialog.component.html',
  styleUrls: ['./delete-plane-dialog.component.scss']
})
export class DeletePlaneDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeletePlaneDialogComponent>,
                private api: PlanesService,
                @Inject(MAT_DIALOG_DATA) public data: PlaneDto) {
    }

    ngOnInit(): void {
    }

    deleteType(): void {
        this.api.deletePlane(this.data.id)
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
