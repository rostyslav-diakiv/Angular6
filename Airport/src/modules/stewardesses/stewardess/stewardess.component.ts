import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {StewardessesService} from '../services/stewardesses.service';
import {StewardessDto} from '../../shared/models';

@Component({
    selector: 'app-stewardess',
    templateUrl: './stewardess.component.html',
    styleUrls: ['./stewardess.component.css']
})
export class StewardessComponent implements OnInit {
    stewardesses: StewardessDto[] = [];
    displayedColumns = ['name', 'familyName', 'dateOfBirth', 'age'];
    dataSource = new BookDataSource(this.api);

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

export class BookDataSource extends DataSource<any> {
    constructor(private api: StewardessesService) {
        super();
    }

    connect() {
        return this.api.getStewardesses();
    }

    disconnect() {

    }
}