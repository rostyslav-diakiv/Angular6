import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {PlaneDto, PlaneTypeDto} from '../../../shared/models';
import {PlanesService} from '../../services/planes.service';
import {Router} from '@angular/router';
import {PlaneTypesService} from '../../../plane-types/services/plane-types.service';

@Component({
    selector: 'app-edit-plane-dialog',
    templateUrl: './edit-plane-dialog.component.html',
    styleUrls: ['./edit-plane-dialog.component.scss']
})
export class EditPlaneDialogComponent implements OnInit {
    description = 'Edit Plane #: ';
    planeForm: FormGroup;
    id = 0;
    types: PlaneTypeDto[] = [];

    constructor(private router: Router,
                private planesService: PlanesService,
                private planeTypesService: PlaneTypesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<EditPlaneDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PlaneDto) {
    }

    ngOnInit() {
        this.id = this.data.id;
        this.description += this.id;
        this.planeForm = this.formBuilder.group({
            'name': [this.data.name, Validators.required],
            'creationDate': [this.data.creationDate, Validators.required],
            'lifeTimeAge': [(this.data.lifeTimeAge.years * 365)
                          + (this.data.lifeTimeAge.months * 30)
                          + this.data.lifeTimeAge.days, Validators.required],
            'type': [null, Validators.required],
        });

        this.planeTypesService.getPlaneTypes()
            .subscribe(value => {
                    this.planeForm.patchValue({
                        type: value.filter(p => p.id === this.data.planeType.id)[0]
                    });

                    this.types = value;
                },
                err => {
                    console.log(err);
                });
    }

    onFormSubmit() {
        this.planesService.updatePlaneForm(this.id, this.planeForm)
            .subscribe(() => {
                this.dialogRef.close(true);
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
