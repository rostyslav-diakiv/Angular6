import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {CrewDto, PilotDto, StewardessDto} from '../../../shared/models';
import {CrewsService} from '../../services/crews.service';
import {Router} from '@angular/router';
import {StewardessesService} from '../../../stewardesses/services/stewardesses.service';
import {PilotsService} from '../../../pilots/services';

@Component({
    selector: 'app-edit-crew-dialog',
    templateUrl: './edit-crew-dialog.component.html',
    styleUrls: ['./edit-crew-dialog.component.scss']
})
export class EditCrewDialogComponent implements OnInit {
    description = 'Edit Crew #: ';
    crewForm: FormGroup;
    id = 0;
    stewardesses: StewardessDto[] = [];
    pilots: PilotDto[] = [];

    constructor(private router: Router,
                private crewsService: CrewsService,
                private stewService: StewardessesService,
                private pilotsService: PilotsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<EditCrewDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: CrewDto) {
    }

    ngOnInit() {
        this.id = this.data.id;
        this.description += this.id;
        this.crewForm = this.formBuilder.group({
            'pilot': [null, Validators.required],
            'stews': [this.data.stewardesses, [Validators.required,
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
                    this.crewForm.patchValue({
                        pilot: value.filter(p => p.id === this.data.pilot.id)[0]
                    });

                    this.pilots = value;
                },
                error1 => {
                    console.log(error1);
                });
    }

    compareFn(user1: StewardessDto, user2: StewardessDto) {
        return user1 && user2 ? user1.id === user2.id : user1 === user2;
    }

    onFormSubmit() {
        this.crewsService.updateCrewForm(this.id, this.crewForm)
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

    getSimilar(extArray, newArray) {
        return extArray.filter(el => this.isContain(el.id, newArray));
    }

    isContain(id, array) {
        return array.filter(el => {
            console.log('returnee', el.id === id);
            return el.id === id;
        }).length;
    }
}


function intersect(a, b) {
    let t;
    if (b.length > a.length) {
        t = b,
            b = a,
            a = t;
    } // indexOf to loop over shorter
    return a.filter(function (e) {
        return b.indexOf(e) > -1;
    });
}
