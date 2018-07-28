import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {StewardessesService} from '../services/stewardesses.service';
import {StewardessDto} from '../../shared/models';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-stewardess-detail',
  templateUrl: './stewardess-detail.component.html',
  styleUrls: ['./stewardess-detail.component.scss']
})
export class StewardessDetailComponent implements OnInit {
  stewardess: StewardessDto;

  constructor(private route: ActivatedRoute,
              private api: StewardessesService,
              private router: Router,
              public snackBar: MatSnackBar) { }

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
          this.router.navigate(['/stewardesses']);
        }, (err) => {
          this.snackBar.open('Unexpected Error happened', 'Ok', {
              duration: 2000,
          });
          console.log(err);
        }
      );
  }
}
