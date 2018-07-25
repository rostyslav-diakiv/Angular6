import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TicketsComponent} from './components/tickets/tickets.component';
import {TicketDetailComponent} from './components/ticket-detail/ticket-detail.component';
import {TicketCreateComponent} from './components/ticket-create/ticket-create.component';
const ticketsRoutes: Routes = [
    {
        path: '',
        component: TicketsComponent,
        data: { title: 'Ticket List' }
    },
    {
        path: 'details/:id',
        component: TicketDetailComponent,
        data: { title: 'Ticket Details' }
    },
    {
        path: 'create',
        component: TicketCreateComponent,
        data: { title: 'Create Ticket' }
    },
    // {
    //     path: 'edit/:id',
    //     component: TicketEditComponent,
    //     data: { title: 'Edit Ticket' }
    // },
];

@NgModule({
  imports: [
      CommonModule,
      RouterModule.forChild(ticketsRoutes),
      MaterialModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
  ],
  declarations: [
      TicketsComponent,
      TicketDetailComponent,
      TicketCreateComponent
  ]
})
export class TicketsModule { }
