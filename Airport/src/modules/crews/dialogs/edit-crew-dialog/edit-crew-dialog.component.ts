import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {PlaneTypeDto} from '../../../shared/models';
import {CrewsService} from '../../services/crews.service';

@Component({
  selector: 'app-edit-crew-dialog',
  templateUrl: './edit-crew-dialog.component.html',
  styleUrls: ['./edit-crew-dialog.component.scss']
})
export class EditCrewDialogComponent implements OnInit {
    description = 'Edit Crew: ';
    typeForm: FormGroup;
    id = 0;

    constructor(private api: CrewsService,
                private formBuilder: FormBuilder,
                public dialogRef: MatDialogRef<EditCrewDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: PlaneTypeDto) {
    }

    ngOnInit() {
        this.id = this.data.id;
        this.description += this.id;
        this.typeForm = this.formBuilder.group({
            'planeModel': [this.data.planeModel, Validators.required],
            'maximalNumberOfPlaces': [this.data.maximalNumberOfPlaces, Validators.required],
            'maximalCarryingCapacityKg': [this.data.maximalCarryingCapacityKg, Validators.required]
        });
    }

    onFormSubmit(form: NgForm) {
        this.api.updateCrewForm(this.id, form)
            .subscribe(res => {
                this.dialogRef.close(true);
            }, (err) => {
                this.dialogRef.close();
            });
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
