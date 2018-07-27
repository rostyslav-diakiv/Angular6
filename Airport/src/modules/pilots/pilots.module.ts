import {NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PilotsListComponent} from './components/pilots-list/pilots-list.component';
import {PilotsService} from './services';
import {PilotDetailComponent} from './components/pilot-detail/pilot-detail.component';
import {PilotResolver} from './services/pilot-resolver.service';
import {PilotEditComponent} from './components/pilot-edit/pilot-edit.component';
import {CommonModule} from '@angular/common';

const pilotsRoutes = RouterModule.forChild([
    {
        // stwardesses
        path: '',
        component: PilotsListComponent,
        data: { title: 'Pilots List' }
    },
    {
        // stwardesses/details/2
        path: 'details/:id',
        component: PilotDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        // stwardesses/create
        path: 'create',
        component: PilotCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        // stwardesses/edit/2
        path: 'edit/:id',
        component: PilotEditComponent,
        data: { title: 'Edit Book' }
    },
];

// const userRouting: ModuleWithProviders = RouterModule.forChild([
//     {
//         path: '',
//         component: PilotsListComponent
//     },
//     {
//         path: ':id',
//         component: PilotDetailComponent,
//         resolve: {pilot: PilotResolver}
//     },
//     {
//         path: ':id/edit',
//         component: PilotEditComponent,
//         resolve: {pilot: PilotResolver},
//     },
// ]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        pilotsRoutes,
    ],
    declarations: [
        PilotsListComponent,
        PilotDetailComponent,
        PilotEditComponent
    ],
    exports: [],
    providers: [
        PilotsService,
        PilotResolver
    ]
})
export class PilotsModule {
}
