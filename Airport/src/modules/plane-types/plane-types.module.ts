import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaneTypesComponent} from './plane-types/plane-types.component';
import {DataService} from './services/data.service';
import {DeleteDialogComponent} from './dialogs/delete/delete.dialog.component';
import {EditDialogComponent} from './dialogs/edit/edit.dialog.component';
import {AddDialogComponent} from './dialogs/add/add.dialog.component';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

const planeTypesRoutes: Routes = [
    {
        path: '',
        component: PlaneTypesComponent,
        data: { title: 'Plane Types List' }
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
        RouterModule.forChild(planeTypesRoutes),
        SharedModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [PlaneTypesComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent],
    entryComponents: [
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent
    ],
    providers: [
        DataService
    ],
})
export class PlaneTypesModule {
}
