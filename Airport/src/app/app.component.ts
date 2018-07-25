import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    year = new Date().getFullYear();
    navigation = [
        { link: 'about', label: 'About' },
        { link: 'features', label: 'Features' },
        { link: 'examples', label: 'Examples' },
        { link: 'products', label: 'Products' },
    ];
}
