import {CommonModule} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { StewardessComponent } from './stewardess/stewardess.component';
import { StewardessDetailComponent } from './book-detail/stewardess-detail.component';
import { StewardessCreateComponent } from './book-create/stewardess-create.component';
import { StewardessEditComponent } from './book-edit/stewardess-edit.component';

import {
MatInputModule,
MatPaginatorModule,
MatProgressSpinnerModule,
MatSortModule,
MatTableModule,
MatIconModule,
MatButtonModule,
MatCardModule,
MatFormFieldModule } from '@angular/material';

const booksRoutes: Routes = [
    {
        path: '',
        component: StewardessComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'stewardess-details/:id',
        component: StewardessDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        path: 'stewardess-create',
        component: StewardessCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        path: 'stewardess-edit/:id',
        component: StewardessEditComponent,
        data: { title: 'Edit Book' }
    },
    // { path: '',
    //     redirectTo: '/books',
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
        RouterModule.forChild(booksRoutes),
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
        MatFormFieldModule
    ],
    providers: []
})
export class BooksModule { }
