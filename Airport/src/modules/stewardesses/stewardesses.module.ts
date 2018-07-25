import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { StewardessComponent } from './stewardess/stewardess.component';
import { StewardessDetailComponent } from './stewardess-detail/stewardess-detail.component';
import { StewardessCreateComponent } from './stewardess-create/stewardess-create.component';
import { StewardessEditComponent } from './stewardess-edit/stewardess-edit.component';

import {
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule
} from '@angular/material';

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
    //     redirectTo: '/stewardesses',
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
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatDatepickerModule,
        MatNativeDateModule
    ],
    providers: []
})
export class StewardessesModule { }
