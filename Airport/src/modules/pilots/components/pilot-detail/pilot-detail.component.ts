import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PilotDto} from '../../../shared/models';
import {PilotsService} from '../../services';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.scss']
})
export class PilotDetailComponent implements OnInit {
    pilot: PilotDto;

    constructor(private route: ActivatedRoute,
                private api: PilotsService,
                private router: Router) { }

    ngOnInit() {
        this.getStewardessDetails(this.route.snapshot.params['id']);
    }

    getStewardessDetails(id) {
        this.api.getPilot(id)
            .subscribe(data => {
                console.log(data);
                this.pilot = data;
            });
    }

    deleteStewardess(id) {
        this.api.deletePilot(id)
            .subscribe(res => {
                    this.router.navigate(['/pilots']); // go to list
                }, (err) => {
                    console.log(err);
                }
            );
    }

}
