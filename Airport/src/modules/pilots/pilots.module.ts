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

const userRouting: ModuleWithProviders = RouterModule.forChild([
    { path: '',
            component: PilotsListComponent
    },
    { path: 'exapmle',
        component: TableHttpExampleComponent
    },
    // { path: ':id',
    //     component: ProductDetailComponent,
    //     resolve: { product: ProductResolver } // TODO
    // },
    // { path: ':id/edit',
    //     component: ProductEditComponent,
    //     resolve: { product: ProductResolver }, // TODO
    // }
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
        // ProductsListComponent,
        // ProductDetailComponent,
        // ProductEditComponent,
        // ProductFilterPipe,
        PilotsListComponent,
        TableHttpExampleComponent
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
        // ProductResolver
    ]
})
export class PilotsModule { }
