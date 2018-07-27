import {
    Component,
    OnDestroy,
    OnInit, ViewChild,
    ViewContainerRef
} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PilotsService} from '../../services';
import {PilotDto} from '../../../shared/models';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import {MatPaginator, MatSort} from '@angular/material';
import {TimeSpan, UNITS} from '../../../shared/models';

@Component({
    selector: 'app-pilots-list',
    templateUrl: './pilots-list.component.html',
    styleUrls: ['./pilots-list.component.scss']
})
export class PilotsListComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['id', 'name', 'familyName', 'experienceAge', 'age', 'dateOfBirth'];
    data: PilotDto[] = [];

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    //
    public pilots: PilotDto[] = [];
    public pageTitle = 'Pilots!!!';
    public listFilter: string;
    public errorMessage: string;

    constructor(private _pilotsService: PilotsService,
                vcr: ViewContainerRef,
                private route: ActivatedRoute) {
        const timeSp = TimeSpan.fromIntervalWithUnit(400, UNITS.DAY);
        console.log(timeSp);
        console.log(timeSp.GetTimeSpanString());

        console.log(JSON.stringify(timeSp));
    }

    ngOnInit() {
        console.log(this.sort);
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    const pils = this._pilotsService.getPilots();
                    return pils;
                }),
                map(data => {
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = data.length;

                    return data;
                }),
                catchError(() => {
                    this.isLoadingResults = false;
                    // Catch if the GitHub API has reached its rate limit. Return empty data.
                    this.isRateLimitReached = true;
                    return observableOf([]);
                })
            ).subscribe(data => {
            this.data = data;
        });
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
                    const position = this.pilots.findIndex(pr => pr.id === +id);
                    // const position = this.products.map(function(e) { return e.id; }).indexOf(id);
                    if (position > -1) {
                        this.pilots.splice(position, 1);
                    }
                    console.log(data);
                },
                error => this.errorMessage = <any>error);
    }
}
