import {Component, OnInit} from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {DeparturesService} from '../../services/departures.service';
import {Router} from '@angular/router';
import {CrewDto, FlightDto, PlaneDto} from '../../../shared/models';
import {PlanesService} from '../../../planes/services/planes.service';
import {CrewsService} from '../../../crews/services/crews.service';
import {FlightsService} from '../../../flights/services/flights.service';

@Component({
    selector: 'app-add-departure-dialog',
    templateUrl: './add-departure-dialog.component.html',
    styleUrls: ['./add-departure-dialog.component.scss']
})
export class AddDepartureDialogComponent implements OnInit {
    minDate = Date.now();
    maxDate = Date.now() + +(new Date(1, 12, 0));
    description = 'Add Departure: ';
    depForm: FormGroup;
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
                public dialogRef: MatDialogRef<AddDepartureDialogComponent>) {
    }

    ngOnInit() {
        this.depForm = this.formBuilder.group({
            'departureTime': [null, Validators.required],
            'flight': [null, Validators.required],
            'crew': [null, Validators.required],
            'plane': [null, Validators.required],
        });

        this.planesService.getPlanes()
            .subscribe(value => {
                    this.planes = value;
                },
                err => {
                    console.log(err);
                });

        this.crewsService.getCrews()
            .subscribe(value => {
                    this.crews = value;
                },
                err => {
                    console.log(err);
                });

        this.flightsService.getFlights()
            .subscribe(value => {
                    this.flights = value;
                },
                err => {
                    console.log(err);
                });
    }

    onFormSubmit() {
        debugger;
        this.departuresService.createDepartureForm(this.depForm)
            .subscribe((res) => {
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
