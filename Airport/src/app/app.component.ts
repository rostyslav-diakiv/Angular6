import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    year = new Date().getFullYear();
    navigation = [
        { link: 'pilots', label: 'Pilots' },
        { link: 'stewardesses', label: 'Stewardesses' },
        { link: 'flights', label: 'Flights' },
        { link: 'tickets', label: 'Tickets' },
    ];
}
