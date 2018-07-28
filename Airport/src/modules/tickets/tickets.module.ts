import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketsComponent} from './components/tickets/tickets.component';
import {TicketDetailComponent} from './components/ticket-detail/ticket-detail.component';
import {TicketCreateComponent} from './components/ticket-create/ticket-create.component';
import {TicketEditComponent} from './components/ticket-edit/ticket-edit.component';
import {SharedModule} from '../shared/shared.module';

const ticketsRoutes: Routes = [
    {
        path: '',
        component: TicketsComponent,
        data: { title: 'Tickets List' }
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
    {
        path: 'edit/:id',
        component: TicketEditComponent,
        data: { title: 'Edit Ticket' }
    },
];

@NgModule({
  imports: [
      SharedModule,
      RouterModule.forChild(ticketsRoutes),
  ],
  declarations: [
      TicketsComponent,
      TicketDetailComponent,
      TicketCreateComponent,
      TicketEditComponent
  ]
})
export class TicketsModule { }
