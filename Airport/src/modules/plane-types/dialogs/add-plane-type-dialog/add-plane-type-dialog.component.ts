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
            'planeModel': ['',
                [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
            'maximalNumberOfPlaces': [0,
                [Validators.required, Validators.min(3), Validators.max(999)]],
            'maximalCarryingCapacityKg': [0,
                [Validators.required, Validators.min(1001), Validators.max(100000)]]
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.createPlaneTypeForm(form)
            .subscribe(res => {
                const id = res['id'];
                this.dialogRef.close(id);
            }, (err) => {
                this.snackBar.open('Model is invalid', 'Ok', {
                    duration: 2000,
                });
                console.log(err);
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
