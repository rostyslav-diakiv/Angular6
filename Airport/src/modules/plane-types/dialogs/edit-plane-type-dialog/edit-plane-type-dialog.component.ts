import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {PlaneTypesService} from '../../services/plane-types.service';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {PlaneTypeDto} from '../../../shared/models';

@Component({
  selector: 'app-edit-plane-type-dialog',
  templateUrl: './edit-plane-type-dialog.component.html',
  styleUrls: ['./edit-plane-type-dialog.component.scss']
})
export class EditPlaneTypeDialogComponent implements OnInit {
    description = 'Edit Plane Type: ';
    typeForm: FormGroup;
    id = 0;
    valError = null;

    constructor(private api: PlaneTypesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<EditPlaneTypeDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PlaneTypeDto) {
    }

    ngOnInit() {
        this.id = this.data.id;
        this.description += this.id;
        this.typeForm = this.formBuilder.group({
            'planeModel': [this.data.planeModel,
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'maximalNumberOfPlaces': [this.data.maximalNumberOfPlaces,
                [Validators.required, Validators.min(3), Validators.max(999)]],
            'maximalCarryingCapacityKg': [this.data.maximalCarryingCapacityKg,
                [Validators.required, Validators.min(1001), Validators.max(100000)]],
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.updatePlaneTypeForm(this.id, form)
            .subscribe(res => {
                this.dialogRef.close(true);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);

                // console.log(JSON.stringify(err));
                // console.log(err['maximalNumberOfPlaces']);
                // let roor = err['maximalNumberOfPlaces'];
                // let mess = roor[0];
                // let l = roor.lenght;
                // for (let i = 0; i < roor.lenght; i++) {
                //     console.log(roor[i]);
                //     // for (let j = 0; j < err.lenght; j++) {
                //     //     console.log(err[i][j]);
                //     // }
                // }
                this.dialogRef.close();
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
