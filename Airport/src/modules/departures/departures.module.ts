import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {DeparturesListComponent} from './components/departures-list/departures-list.component';
import {DepartureDetailComponent} from './components/departure-detail/departure-detail.component';
import {AddDepartureDialogComponent} from './dialogs/add-departure-dialog/add-departure-dialog.component';
import {EditDepartureDialogComponent} from './dialogs/edit-departure-dialog/edit-departure-dialog.component';
import {DeleteDepartureDialogComponent} from './dialogs/delete-departure-dialog/delete-departure-dialog.component';
import {DeparturesService} from './services/departures.service';

const departuresRoutes: Routes = [
    {
        path: '',
        component: DeparturesListComponent,
        data: {title: 'Departures List'}
    },
    {
        path: 'details/:id',
        component: DepartureDetailComponent,
        data: {title: 'Departure Details'}
    }
];

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(departuresRoutes),
    ],
    declarations: [
        DepartureDetailComponent,
        DeparturesListComponent,
        AddDepartureDialogComponent,
        EditDepartureDialogComponent,
        DeleteDepartureDialogComponent
    ],
    entryComponents: [
        AddDepartureDialogComponent,
        EditDepartureDialogComponent,
        DeleteDepartureDialogComponent
    ],
    providers: [
        DeparturesService
    ]
})
export class DeparturesModule {
}
