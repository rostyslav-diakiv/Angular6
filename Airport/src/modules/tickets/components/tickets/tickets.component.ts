import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {TicketsService} from '../../services/tickets.service';
import {TicketDto} from '../../../shared/models/ticket-dto';

@Component({
    selector: 'app-tickets',
    templateUrl: './tickets.component.html',
    styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
    tickets: TicketDto[] = [];
    displayedColumns = [
        'id',
        'price',
        'flight'
    ];
    dataSource = new BookDataSource(this.api);

    constructor(private api: TicketsService) {
    }

    ngOnInit() {
        this.api.getTickets()
            .subscribe(res => {
                console.log(res);
                this.tickets = res;
            }, err => {
                console.log(err);
            });
    }
}

export class BookDataSource extends DataSource<any> {
    constructor(private api: TicketsService) {
        super();
    }

    connect() {
        return this.api.getTickets();
    }

    disconnect() {

    }
}
