import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PlanesService} from '../../services/planes.service';
import {Router} from '@angular/router';
import {PlaneTypeDto} from '../../../shared/models';
import {PlaneTypesService} from '../../../plane-types/services/plane-types.service';

@Component({
    selector: 'app-add-plane-dialog',
    templateUrl: './add-plane-dialog.component.html',
    styleUrls: ['./add-plane-dialog.component.scss']
})
export class AddPlaneDialogComponent implements OnInit {
    description = 'Add Plane: ';
    planeForm: FormGroup;
    types: PlaneTypeDto[] = [];

    constructor(private router: Router,
                private planesService: PlanesService,
                private planeTypesService: PlaneTypesService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<AddPlaneDialogComponent>) {
    }

    ngOnInit() {
        this.planeForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'creationDate': [null, Validators.required],
            'lifeTimeAge': [0, Validators.required],
            'type': [null, Validators.required],
        });

        this.planeTypesService.getPlaneTypes()
            .subscribe(value => {
                    this.types = value;
                },
                err => {
                    console.log(err);
                });
    }

    onFormSubmit() {
        this.planesService.createPlaneForm(this.planeForm)
            .subscribe((res) => {
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
