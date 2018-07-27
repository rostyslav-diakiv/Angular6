import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CrewsService} from '../../services/crews.service';
import {PilotDto, StewardessDto} from '../../../shared/models/index';
import {Router} from '@angular/router';
import {StewardessesService} from '../../../stewardesses/services/stewardesses.service';
import {PilotsService} from '../../../pilots/services/index';

@Component({
  selector: 'app-create-crew',
  templateUrl: './create-crew.component.html',
  styleUrls: ['./create-crew.component.scss']
})
export class CreateCrewComponent implements OnInit {
    crewForm: FormGroup;
    id = 0;
    stewardesses: StewardessDto[] = [];
    pilots: PilotDto[] = [];

    constructor(private router: Router,
                private crewsService: CrewsService,
                private stewService: StewardessesService,
                private pilotsService: PilotsService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.crewForm = this.formBuilder.group({
            'price': [0, Validators.required],
            'pilot': [null, Validators.required],
            'stews': [[], [Validators.required,
                           Validators.minLength(1)]],
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
                this.router.navigate(['/tickets/details', id]);
            }, (err) => {
                console.log(err);
            });
    }
}
