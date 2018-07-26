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
import { PlaneTypeDetailComponent } from './plane-type-detail/plane-type-detail.component';

const planeTypesRoutes: Routes = [
    {
        path: '',
        component: PlaneTypesComponent,
        data: { title: 'Plane Types List' }
    },
    {
        path: 'details/:id',
        component: PlaneTypeDetailComponent,
        data: { title: 'Ticket Details' }
    },
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
    declarations: [
        PlaneTypesComponent,
        PlaneTypeDetailComponent,
        AddDialogComponent,
        EditDialogComponent,
        DeleteDialogComponent,
        ],
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
