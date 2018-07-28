import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TicketsComponent} from './components/tickets/tickets.component';
import {TicketDetailComponent} from './components/ticket-detail/ticket-detail.component';
import {SharedModule} from '../shared/shared.module';

import {AddTicketDialogComponent} from './dialogs/add-ticket-dialog/add-ticket-dialog.component';
import {EditTicketDialogComponent} from './dialogs/edit-ticket-dialog/edit-ticket-dialog.component';
import {DeleteTicketDialogComponent} from './dialogs/delete-ticket-dialog/delete-ticket-dialog.component';

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
      SharedModule,
      RouterModule.forChild(ticketsRoutes),
  ],
  declarations: [
      TicketsComponent,
      TicketDetailComponent,
      AddTicketDialogComponent,
      EditTicketDialogComponent,
      DeleteTicketDialogComponent
  ],
    entryComponents: [
        AddTicketDialogComponent,
        EditTicketDialogComponent,
        DeleteTicketDialogComponent
    ],
      // TicketCreateComponent,
      // TicketEditComponent
})
export class TicketsModule { }
