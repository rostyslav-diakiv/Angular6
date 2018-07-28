import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PilotsListComponent} from './components/pilots-list/pilots-list.component';
import {PilotsService} from './services';
import {PilotDetailComponent} from './components/pilot-detail/pilot-detail.component';
import {PilotResolver} from './services/pilot-resolver.service';
import {PilotEditComponent} from './components/pilot-edit/pilot-edit.component';
import {PilotCreateComponent} from './components/pilot-create/pilot-create.component';

const pilotsRoutes = RouterModule.forChild([
    {
        path: '',
        component: PilotsListComponent,
        data: { title: 'Pilots List' }
    },
    {
        path: 'details/:id',
        component: PilotDetailComponent,
        data: { title: 'Pilot Details' }
    },
    {
        path: 'create',
        component: PilotCreateComponent,
        data: { title: 'Create Pilot' }
    },
    {
        path: 'edit/:id',
        component: PilotEditComponent,
        data: { title: 'Edit Pilot' }
    },
]);

@NgModule({
    imports: [
        SharedModule,
        pilotsRoutes,
    ],
    declarations: [
        PilotsListComponent,
        PilotCreateComponent,
        PilotDetailComponent,
        PilotEditComponent
    ],
    providers: [
        PilotsService,
        PilotResolver
    ]
})
export class PilotsModule {
}
