import {
    Component,
    OnDestroy,
    OnInit,
    ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PilotsService} from '../../services/index';
import {PilotDto} from '../../../shared/models/index';

@Component({
    selector: 'app-pilots-list',
    templateUrl: './pilots-list.component.html',
    styleUrls: ['./pilots-list.component.scss']
})
export class PilotsListComponent implements OnInit, OnDestroy {
    public pilots: PilotDto[] = [];
    public pageTitle = 'Pilots!!!';
    public listFilter: string;
    public errorMessage: string;

    constructor(private _pilotsService: PilotsService,
                vcr: ViewContainerRef,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        // this.getProducts();
        // this.listFilter = this.route.snapshot.queryParams['filterBy'] || '';
        this.listFilter = this.route.snapshot.queryParamMap.get('filterBy');
    }

    ngOnDestroy(): void {
    }

    getPilots() {
        this._pilotsService.getPilots()
            .subscribe(pils => this.pilots = pils,
                error => this.errorMessage = <any>error);
    }

    deletePilot(id: number) {
        this._pilotsService.deletePilot(id)
            .subscribe(data => {
                    const position = this.pilots.findIndex(pr => pr.Id === +id);
                    // const position = this.products.map(function(e) { return e.id; }).indexOf(id);
                    if (position > -1) {
                        this.pilots.splice(position, 1);
                    }
                    console.log(data);
                },
                error => this.errorMessage = <any>error);
    }
}
