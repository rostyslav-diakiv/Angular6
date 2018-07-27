import {
    Component,
    OnInit,
} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {PilotsService} from '../../services';

@Component({
    selector: 'app-pilot-edit',
    templateUrl: './pilot-edit.component.html',
    styleUrls: ['./pilot-edit.component.scss']
})
export class PilotEditComponent implements OnInit {
    pilotForm: FormGroup;
    id = 0;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private api: PilotsService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.getPilot(this.route.snapshot.params['id']);
        this.pilotForm = this.formBuilder.group({
            'name': ['', Validators.required],
            'familyName': ['', Validators.required],
            'experience': [0, Validators.required],
            'dateOfBirth': [null, Validators.required]
        });
    }

    getPilot(id) {
        this.api.getPilot(id).subscribe(data => {
            this.id = data.id;
            this.pilotForm.setValue({
                name: data.name,
                familyName: data.familyName,
                experience: [(data.experienceAge.years * 365)
                            + (data.experienceAge.months * 30)
                            + data.experienceAge.days, Validators.required],
                dateOfBirth: data.dateOfBirth
            });
        });
    }

    onFormSubmit() {
        this.api.updatePilot(this.id, this.pilotForm)
            .subscribe(res => {
                const id = res['id'];
                this.router.navigate(['/pilots/details', id]);  // /flights/details/id go to details of just created flights
            }, (err) => {
                console.log(err);
            });
    }
}
