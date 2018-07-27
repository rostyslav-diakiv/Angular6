import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from '@angular/material';
import {CrewDto, DepartureDto, FlightDto, PlaneDto} from '../../../shared/models';
import {DeparturesService} from '../../services/departures.service';
import {Router} from '@angular/router';
import {PlanesService} from '../../../planes/services/planes.service';
import {CrewsService} from '../../../crews/services/crews.service';
import {FlightsService} from '../../../shared/services/flights.service';

@Component({
    selector: 'app-edit-departure-dialog',
    templateUrl: './edit-departure-dialog.component.html',
    styleUrls: ['./edit-departure-dialog.component.scss']
})
export class EditDepartureDialogComponent implements OnInit {
    description = 'Edit Departure #: ';
    depForm: FormGroup;
    id = 0;
    planes: PlaneDto[] = [];
    crews: CrewDto[] = [];
    flights: FlightDto[] = [];

    constructor(private router: Router,
                private departuresService: DeparturesService,
                private planesService: PlanesService,
                private crewsService: CrewsService,
                private flightsService: FlightsService,
                private formBuilder: FormBuilder,
                public snackBar: MatSnackBar,
                public dialogRef: MatDialogRef<EditDepartureDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data: DepartureDto) {
    }

    ngOnInit() {
        this.id = this.data.id;
        this.description += this.id;
        this.depForm = this.formBuilder.group({
            'departureTime': [this.data.departureTime, Validators.required],
            'flight': [this.data.flight, Validators.required],
            'crew': [null, Validators.required],
            'plane': [this.data.plane, Validators.required],
        });

        this.planesService.getPlanes()
            .subscribe(value => {
                    this.depForm.patchValue({
                        plane: value.filter(p => p.id === this.data.plane.id)[0]
                    });

                    this.planes = value;
                },
                err => {
                    console.log(err);
                });

        this.crewsService.getCrews()
            .subscribe(value => {
                    this.depForm.patchValue({
                        crew: value.filter(c => c.id === this.data.crewId)[0]
                    });

                    this.crews = value;
                },
                err => {
                    console.log(err);
                });

        this.flightsService.getFlights()
            .subscribe(value => {
                    this.depForm.patchValue({
                        flight: value.filter(f => f.number === this.data.flight.number)[0]
                    });

                    this.flights = value;
                },
                err => {
                    console.log(err);
                });
    }

    onFormSubmit() {
        this.departuresService.updateDepartureForm(this.id, this.depForm)
            .subscribe(() => {
                this.dialogRef.close(true);
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
