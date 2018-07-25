import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {PilotsService} from '../../services';
import {PilotDto} from '../../../shared/models';

@Component({
  selector: 'app-pilot-detail',
  templateUrl: './pilot-detail.component.html',
  styleUrls: ['./pilot-detail.component.scss']
})
export class PilotDetailComponent implements OnInit, OnDestroy {
    public pageTitle = 'Pilot Detail';
    public pilot: PilotDto;
    public errorMessage: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private _pilotsService: PilotsService) {
    }

    ngOnInit(): void {
        const pil = this.route.snapshot.data['pilot'];
        this.pilot = pil;
    }

    ngOnDestroy() {
    }

    onBack(): void {
        this.router.navigate(['/pilots']);
    }
}
