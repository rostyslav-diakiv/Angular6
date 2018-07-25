import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {TableTestComponent} from './components/table-test/table-test.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FlightsComponent} from './components/flights/flights.component';
import {FlightDetailComponent} from './components/flight-detail/flight-detail.component';
import {FlightCreateComponent} from './components/flight-create/flight-create.component';
import {FlightEditComponent} from './components/flight-edit/flight-edit.component';
import {SharedModule} from '../shared/shared.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
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
    {
        // testTable
        path: 'testTable',
        component: TableTestComponent,
        data: { title: 'Book Details' }
    },
];


@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(flightsRoutes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [
        TableTestComponent,
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
