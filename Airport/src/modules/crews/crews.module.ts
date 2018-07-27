import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCrewComponent} from './create-crew/create-crew.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CrewsService} from './services/crews.service';

const crewsRoutes: Routes = [
    {
        path: '',
        component: CreateCrewComponent,
        data: {title: 'Create Crew'}
    },
    // {
    //     path: 'details/:id',
    //     component: TicketDetailComponent,
    //     data: { title: 'Ticket Details' }
    // },
    // {
    //     path: 'create',
    //     component: TicketCreateComponent,
    //     data: { title: 'Create Ticket' }
    // },
    // {
    //     path: 'edit/:id',
    //     component: TicketEditComponent,
    //     data: { title: 'Edit Ticket' }
    // },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(crewsRoutes),
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
    ],
    declarations: [CreateCrewComponent],
    providers: [
        CrewsService
    ]
})
export class CrewsModule {
}
