import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {TicketsService} from '../../services/tickets.service';
import {TicketDto} from '../../../shared/models/ticket-dto';

@Component({
  selector: 'app-ticket-detail',
  templateUrl: './ticket-detail.component.html',
  styleUrls: ['./ticket-detail.component.css']
})
export class TicketDetailComponent implements OnInit {

  ticket: TicketDto;

  constructor(private route: ActivatedRoute,
              private api: TicketsService,
              private router: Router) { }

  ngOnInit() {
    this.getStewardessDetails(this.route.snapshot.params['id']);
  }

  getStewardessDetails(id) {
    this.api.getTicket(id)
      .subscribe(data => {
        console.log(data);
        this.ticket = data;
      });
  }

  deleteStewardess(id) {
    this.api.deleteTicket(id)
      .subscribe(res => {
          this.router.navigate(['/tickets']); // go to list
        }, (err) => {
          console.log(err);
        }
      );
  }

}
