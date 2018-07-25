import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {FlightsService} from '../services/flights.service';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.css']
})
export class StewardessDetailComponent implements OnInit {

  stewardess = {};

  constructor(private route: ActivatedRoute, private api: FlightsService, private router: Router) { }

  ngOnInit() {
    this.getStewardessDetails(this.route.snapshot.params['id']);
  }

  getStewardessDetails(id) {
    this.api.getStewardess(id)
      .subscribe(data => {
        console.log(data);
        this.stewardess = data;
      });
  }

  deleteStewardess(id) {
    this.api.deleteStewardess(id)
      .subscribe(res => {
          this.router.navigate(['/stewardesses']); // go to list
        }, (err) => {
          console.log(err);
        }
      );
  }

}
