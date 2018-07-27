import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PlaneTypesService} from '../../services/plane-types.service';
import {PlaneTypeDto} from '../../../shared/models';

@Component({
  selector: 'app-delete-plane-type-dialog',
  templateUrl: './delete-plane-type-dialog.component.html',
  styleUrls: ['./delete-plane-type-dialog.component.scss']
})
export class DeletePlaneTypeDialogComponent implements OnInit {
    constructor(public dialogRef: MatDialogRef<DeletePlaneTypeDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PlaneTypeDto,
                private api: PlaneTypesService) { }

    ngOnInit(): void {
    }

    deleteType(): void {
        this.api.deletePlaneType(this.data.id)
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
