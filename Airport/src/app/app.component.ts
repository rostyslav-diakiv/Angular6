import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  selectedValue = '';
  items = [
    { value: '0', view: 'Qwer' },
    { value: '1', view: 'one' },
    { value: '2', view: 'Two' }
  ];
}
