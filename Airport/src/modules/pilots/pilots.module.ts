import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';
import {RouterModule} from '@angular/router';
import { PilotsListComponent } from './components/pilots-list/pilots-list.component';
import {PilotsService} from './services';
import { TableHttpExampleComponent } from './components/table-http-example/table-http-example.component';
import {
    MatSortModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule} from '@angular/material';
import { PilotDetailComponent } from './components/pilot-detail/pilot-detail.component';
import {PilotResolver} from './services/pilot-resolver.service';
import { PilotEditComponent } from './components/pilot-edit/pilot-edit.component';

const userRouting: ModuleWithProviders = RouterModule.forChild([
    { path: '',
            component: PilotsListComponent
    },
    { path: 'exapmle',
        component: TableHttpExampleComponent
    },
    { path: ':id',
      component: PilotDetailComponent,
        resolve: { pilot: PilotResolver } // TODO
    },
    { path: ':id/edit',
        component: PilotEditComponent,
        resolve: { pilot: PilotResolver }, // TODO
    },
    //  resolve: { <entityName>: <entityNameResolver> }
]);

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        userRouting,
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule
    ],
    declarations: [
        // ProductEditComponent,
        // ProductFilterPipe,
        PilotsListComponent,
        TableHttpExampleComponent,
        PilotDetailComponent,
        PilotEditComponent
    ],
    exports: [
        MatTableModule,
        MatProgressSpinnerModule,
        MatPaginatorModule,
        MatSortModule
    ],
    providers: [
        PilotsService,
        // ProductDetailGuard,
        // ProductEditGuard,
        PilotResolver
    ]
})
export class PilotsModule { }
