import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {PlaneTypesService} from '../../services/plane-types.service';

@Component({
    selector: 'app-add-plane-type-dialog',
    templateUrl: './add-plane-type-dialog.component.html',
    styleUrls: ['./add-plane-type-dialog.component.scss']
})
export class AddPlaneTypeDialogComponent implements OnInit {
    description = 'Create Plane Type';
    typeForm: FormGroup;

    constructor(private api: PlaneTypesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<AddPlaneTypeDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: any) {
    }

    ngOnInit() {
        this.typeForm = this.formBuilder.group({
            'planeModel': ['', Validators.required],
            'maximalNumberOfPlaces': [0, Validators.required],
            'maximalCarryingCapacityKg': [0, Validators.required]
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.createPlaneTypeForm(form)
            .subscribe(res => {
                const id = res['id'];
                this.dialogRef.close(id);
            }, (err) => {
                this.snackBar.open(err[0], 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
