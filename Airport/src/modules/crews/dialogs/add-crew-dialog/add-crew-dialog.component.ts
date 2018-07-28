import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CrewDto, PilotDto, StewardessDto} from '../../../shared/models';
import {CrewsService} from '../../services/crews.service';
import {Router} from '@angular/router';
import {StewardessesService} from '../../../stewardesses/services/stewardesses.service';
import {PilotsService} from '../../../pilots/services';

@Component({
    selector: 'app-add-crew-dialog',
    templateUrl: './add-crew-dialog.component.html',
    styleUrls: ['./add-crew-dialog.component.scss']
})
export class AddCrewDialogComponent implements OnInit {
    description = 'Create Crew';
    crewForm: FormGroup;
    stewardesses: StewardessDto[] = [];
    pilots: PilotDto[] = [];

    constructor(private router: Router,
                private crewsService: CrewsService,
                private stewService: StewardessesService,
                private pilotsService: PilotsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<AddCrewDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CrewDto) {
    }

    ngOnInit() {
        this.crewForm = this.formBuilder.group({
            'price': [0, Validators.required],
            'pilot': [null, Validators.required],
            'stews': [[], [Validators.required,
                Validators.minLength(1),
                Validators.maxLength(5)]],
        });

        this.stewService.getStewardesses()
            .subscribe(value => {
                    this.stewardesses = value;
                },
                error1 => {
                    console.log(error1);
                });

        this.pilotsService.getPilots()
            .subscribe(value => {
                    this.pilots = value;
                },
                error1 => {
                    console.log(error1);
                });
    }

    onFormSubmit() {
        console.log(this.crewForm);
        this.crewsService.createCrewForm(this.crewForm)
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
