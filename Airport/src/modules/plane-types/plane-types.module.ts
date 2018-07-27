import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlaneTypesComponent} from './plane-types/plane-types.component';
import {DataService} from './services/data.service';
import {SharedModule} from '../shared/shared.module';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { PlaneTypeDetailComponent } from './plane-type-detail/plane-type-detail.component';
import { AddPlaneTypeDialogComponent } from './dialogs/add-plane-type-dialog/add-plane-type-dialog.component';
import { TypesListComponent } from './types-list/types-list.component';
import {PlaneTypesService} from './services/plane-types.service';
import { EditPlaneTypeDialogComponent } from './dialogs/edit-plane-type-dialog/edit-plane-type-dialog.component';
import { DeletePlaneTypeDialogComponent } from './dialogs/delete-plane-type-dialog/delete-plane-type-dialog.component';

const planeTypesRoutes: Routes = [
    {
        path: '',
        component: TypesListComponent,
        data: { title: 'Plane Types List' }
    },
    {
        path: 'example',
        component: PlaneTypesComponent,
        data: { title: 'Issues list' }
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
        AddPlaneTypeDialogComponent,
        TypesListComponent,
        EditPlaneTypeDialogComponent,
        DeletePlaneTypeDialogComponent,
        ],
    entryComponents: [
        AddPlaneTypeDialogComponent,
        EditPlaneTypeDialogComponent,
        DeletePlaneTypeDialogComponent,
    ],
    providers: [
        DataService,
        PlaneTypesService
    ],
})
export class PlaneTypesModule {
}
