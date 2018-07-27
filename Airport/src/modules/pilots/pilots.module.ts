import {ModuleWithProviders, NgModule} from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import {PilotsListComponent} from './components/pilots-list/pilots-list.component';
import {PilotsService} from './services';
import {TableHttpExampleComponent} from './components/table-http-example/table-http-example.component';
import {PilotDetailComponent} from './components/pilot-detail/pilot-detail.component';
import {PilotResolver} from './services/pilot-resolver.service';
import {PilotEditComponent} from './components/pilot-edit/pilot-edit.component';
import {CommonModule} from '@angular/common';

const userRouting: ModuleWithProviders = RouterModule.forChild([
    {
        path: '',
        component: PilotsListComponent
    },
    {
        path: 'exapmle',
        component: TableHttpExampleComponent
    },
    {
        path: ':id',
        component: PilotDetailComponent,
        resolve: {pilot: PilotResolver} // TODO
    },
    {
        path: ':id/edit',
        component: PilotEditComponent,
        resolve: {pilot: PilotResolver}, // TODO
    },
]);

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        userRouting,
    ],
    declarations: [
        PilotsListComponent,
        TableHttpExampleComponent,
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
