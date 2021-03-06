import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {PlaneTypeDetailComponent} from './plane-type-detail/plane-type-detail.component';
import {AddPlaneTypeDialogComponent} from './dialogs/add-plane-type-dialog/add-plane-type-dialog.component';
import {TypesListComponent} from './types-list/types-list.component';
import {PlaneTypesService} from './services/plane-types.service';
import {EditPlaneTypeDialogComponent} from './dialogs/edit-plane-type-dialog/edit-plane-type-dialog.component';
import {DeletePlaneTypeDialogComponent} from './dialogs/delete-plane-type-dialog/delete-plane-type-dialog.component';

const planeTypesRoutes: Routes = [
    {
        path: '',
        component: TypesListComponent,
        data: {title: 'Plane Types List'}
    },
    {
        path: 'details/:id',
        component: PlaneTypeDetailComponent,
        data: {title: 'Plane Type Details'}
    },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(planeTypesRoutes)
    ],
    declarations: [
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
        PlaneTypesService
    ],
})
export class PlaneTypesModule {
}
