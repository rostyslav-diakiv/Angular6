import {Component, OnInit} from '@angular/core';
import {PilotsService} from '../../services';
import {PilotDto} from '../../../shared/models';
import {DataSource} from '@angular/cdk/collections';

@Component({
    selector: 'app-pilots-list',
    templateUrl: './pilots-list.component.html',
    styleUrls: ['./pilots-list.component.scss']
})
export class PilotsListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'familyName', 'experienceAge', 'age', 'dateOfBirth'];
    data: PilotDto[] = [];
    dataSource = new PilotsDataSource(this.api);

    constructor(private api: PilotsService) {
    }

    ngOnInit() {
        this.api.getPilots()
            .subscribe(res => {
                console.log(res);
                this.data = res;
            }, err => {
                console.log(err);
            });
    }
}

export class PilotsDataSource extends DataSource<any> {
    constructor(private api: PilotsService) {
        super();
    }

    connect() {
        return this.api.getPilots();
    }

    disconnect() {

    }
}
