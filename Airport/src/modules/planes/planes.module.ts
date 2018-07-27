import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlanesService} from './services/planes.service';
import {PlanesListComponent} from './components/planes-list/planes-list.component';
import {AddPlaneDialogComponent} from './dialogs/add-plane-dialog/add-plane-dialog.component';
import {PlaneDetailComponent} from './components/plane-detail/plane-detail.component';
import {EditPlaneDialogComponent} from './dialogs/edit-plane-dialog/edit-plane-dialog.component';
import {DeletePlaneDialogComponent} from './dialogs/delete-plane-dialog/delete-plane-dialog.component';

const planesRoutes: Routes = [
    {
        path: '',
        component: PlanesListComponent,
        data: {title: 'Planes List'}
    },
    {
        path: 'details/:id',
        component: PlaneDetailComponent,
        data: {title: 'Plane Details'}
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule.forRoot(),
        RouterModule.forChild(planesRoutes),
    ],
    declarations: [
        PlaneDetailComponent,
        PlanesListComponent,
        AddPlaneDialogComponent,
        EditPlaneDialogComponent,
        DeletePlaneDialogComponent
    ],
    entryComponents: [
        AddPlaneDialogComponent,
        EditPlaneDialogComponent,
        DeletePlaneDialogComponent
    ],
    providers: [
        PlanesService
    ]
})
export class PlanesModule {
}
