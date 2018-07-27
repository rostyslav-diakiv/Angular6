import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StewardessComponent } from './stewardess/stewardess.component';
import { StewardessDetailComponent } from './stewardess-detail/stewardess-detail.component';
import { StewardessCreateComponent } from './stewardess-create/stewardess-create.component';
import { StewardessEditComponent } from './stewardess-edit/stewardess-edit.component';

import {SharedModule} from '../shared/shared.module';
import {CommonModule} from '@angular/common';

const stewardessesRoutes: Routes = [
    {
        // stwardesses
        path: '',
        component: StewardessComponent,
        data: { title: 'Book List' }
    },
    {
        // stwardesses/details/2
        path: 'details/:id',
        component: StewardessDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        // stwardesses/create
        path: 'create',
        component: StewardessCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        // stwardesses/edit/2
        path: 'edit/:id',
        component: StewardessEditComponent,
        data: { title: 'Edit Book' }
    },
    // { path: '',
    //     redirectTo: '/flights',
    //     pathMatch: 'full'
    // }
];



@NgModule({
    declarations: [
        StewardessComponent,
        StewardessDetailComponent,
        StewardessCreateComponent,
        StewardessEditComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(stewardessesRoutes),
        SharedModule,
    ],
    providers: []
})
export class StewardessesModule { }
