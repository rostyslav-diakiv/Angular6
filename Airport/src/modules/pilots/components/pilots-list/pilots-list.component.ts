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
import {ExampleHttpDao, GithubIssue} from '../table-http-example/table-http-example.component';
import {MatPaginator, MatSort} from '@angular/material';

@Component({
    selector: 'app-pilots-list',
    templateUrl: './pilots-list.component.html',
    styleUrls: ['./pilots-list.component.scss']
})
export class PilotsListComponent implements OnInit, OnDestroy {
    displayedColumns: string[] = ['id', 'name', 'familyName', 'experience', 'age', 'dateOfBirth'];
    exampleDatabase: ExampleHttpDao | null;
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
    }

    ngOnInit() {
        // this.exampleDatabase = new ExampleHttpDao(this.http);

        // If the user changes the sort order, reset back to the first page.
        console.log(this.sort);
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

        merge(this.sort.sortChange, this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    debugger;
                    this.isLoadingResults = true;
                    const pils = this._pilotsService.getPilots();
                    return pils;
                    // return this.exampleDatabase!.getRepoIssues(
                    //     this.sort.active, this.sort.direction, this.paginator.pageIndex);
                }),
                map(data => {
                    debugger;
                    // Flip flag to show that loading has finished.
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    this.resultsLength = data.length;

                    return data;
                }),
                catchError(() => {
                    debugger;
                    this.isLoadingResults = false;
                    // Catch if the GitHub API has reached its rate limit. Return empty data.
                    this.isRateLimitReached = true;
                    return observableOf([]);
                })
            ).subscribe(data => {
            debugger;
            this.data = data;
        });

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