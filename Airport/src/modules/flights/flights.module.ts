import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {FlightsComponent} from './components/flights/flights.component';
import {FlightDetailComponent} from './components/flight-detail/flight-detail.component';
import {FlightCreateComponent} from './components/flight-create/flight-create.component';
import {FlightEditComponent} from './components/flight-edit/flight-edit.component';
import {SharedModule} from '../shared/shared.module';
import {FlightsService} from './services/flights.service';

const flightsRoutes: Routes = [
    {
        path: '',
        component: FlightsComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'details/:id',
        component: FlightDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        path: 'create',
        component: FlightCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        path: 'edit/:id',
        component: FlightEditComponent,
        data: { title: 'Edit Book' }
    },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(flightsRoutes),
    ],
    declarations: [
        FlightsComponent,
        FlightDetailComponent,
        FlightCreateComponent,
        FlightEditComponent
    ],
    providers: [
        FlightsService
    ]
})
export class FlightsModule { }
