import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {StewardessesService} from '../services/stewardesses.service';
import {StewardessDto} from '../../shared/models';

@Component({
    selector: 'app-stewardess',
    templateUrl: './stewardess.component.html',
    styleUrls: ['./stewardess.component.scss']
})
export class StewardessComponent implements OnInit {
    stewardesses: StewardessDto[] = [];
    displayedColumns = ['name', 'familyName', 'dateOfBirth', 'age'];
    dataSource = new StewDataSource(this.api);

    constructor(private api: StewardessesService) {
    }

    ngOnInit() {
        this.api.getStewardesses()
            .subscribe(res => {
                console.log(res);
                this.stewardesses = res;
            }, err => {
                console.log(err);
            });
    }
}

export class StewDataSource extends DataSource<any> {
    constructor(private api: StewardessesService) {
        super();
    }

    connect() {
        return this.api.getStewardesses();
    }

    disconnect() {

    }
}
