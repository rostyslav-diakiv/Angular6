import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    year = new Date().getFullYear();
    navigation = [
        { link: 'planeTypes', label: 'Plane Types', icon: 'home' },
        { link: 'crews', label: 'Crews', icon: 'input' },
        { link: 'tickets', label: 'Tickets', icon: 'input' },
        { link: 'departures', label: 'Departures', icon: 'home' },
        { link: 'planes', label: 'Planes', icon: 'dashboard' },
        { link: 'pilots', label: 'Pilots', icon: 'dashboard' },
        { link: 'stewardesses', label: 'Stewardesses', icon: 'home' },
        { link: 'flights', label: 'Flights', icon: 'dashboard' },
    ];
}
