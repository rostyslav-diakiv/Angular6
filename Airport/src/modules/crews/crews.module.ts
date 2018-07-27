import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CreateCrewComponent} from './components/create-crew/create-crew.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../material/material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {CrewsService} from './services/crews.service';
import {CrewsListComponent} from './components/crews-list/crews-list.component';
import {CrewDetailComponent} from './components/crew-detail/crew-detail.component';
import {SharedModule} from '../shared/shared.module';
import {AddCrewDialogComponent} from './dialogs/add-crew-dialog/add-crew-dialog.component';
import {EditCrewDialogComponent} from './dialogs/edit-crew-dialog/edit-crew-dialog.component';
import {DeleteCrewDialogComponent} from './dialogs/delete-crew-dialog/delete-crew-dialog.component';

const crewsRoutes: Routes = [
    {
        path: '',
        component: CrewsListComponent,
        data: {title: 'Create Crew'}
    },
    {
        path: 'details/:id',
        component: CrewDetailComponent,
        data: { title: 'Crew Details' }
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(crewsRoutes),
        SharedModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        CreateCrewComponent,
        CrewDetailComponent,
        CrewsListComponent,
        AddCrewDialogComponent,
        EditCrewDialogComponent,
        DeleteCrewDialogComponent
    ],
    entryComponents: [
        AddCrewDialogComponent,
        EditCrewDialogComponent,
        DeleteCrewDialogComponent
    ],
    providers: [
        CrewsService
    ]
})
export class CrewsModule {
}
