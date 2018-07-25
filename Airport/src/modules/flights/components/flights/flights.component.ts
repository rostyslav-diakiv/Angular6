import {Component, OnInit} from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {FlightsService} from '../../../shared/services/flights.service';
import {FlightDto} from '../../../shared/models/flight-dto';

@Component({
    selector: 'app-flights',
    templateUrl: './flights.component.html',
    styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
    flights: FlightDto[] = [];
    displayedColumns = [
        'number',
        'departureTime',
        'pointOfDeparture',
        'destinationArrivalTime',
        'destination'
    ];
    dataSource = new BookDataSource(this.api);

    constructor(private api: FlightsService) {
    }

    ngOnInit() {
        this.api.getFlights()
            .subscribe(res => {
                console.log(res);
                this.flights = res;
            }, err => {
                console.log(err);
            });
    }
}

export class BookDataSource extends DataSource<any> {
    constructor(private api: FlightsService) {
        super();
    }

    connect() {
        return this.api.getFlights();
    }

    disconnect() {

    }
}
