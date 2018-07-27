import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FlightsService} from '../../../shared/services/flights.service';
import {FlightDto} from '../../../shared/models';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './flight-detail.component.html',
  styleUrls: ['./flight-detail.component.scss']
})
export class FlightDetailComponent implements OnInit {

  flight: FlightDto;

  constructor(private route: ActivatedRoute, private api: FlightsService, private router: Router) { }

  ngOnInit() {
    this.getStewardessDetails(this.route.snapshot.params['id']);
  }

  getStewardessDetails(id) {
    this.api.getFlight(id)
      .subscribe(data => {
        console.log(data);
        this.flight = data;
      });
  }

  deleteStewardess(id) {
    this.api.deleteFlight(id)
      .subscribe(res => {
          this.router.navigate(['/flights']); // go to list
        }, (err) => {
          console.log(err);
        }
      );
  }

}
