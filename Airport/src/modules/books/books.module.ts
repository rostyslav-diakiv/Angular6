import {CommonModule} from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './book/book.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookCreateComponent } from './book-create/book-create.component';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
        component: BookComponent,
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: BookDetailComponent,
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: BookCreateComponent,
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: BookEditComponent,
        data: { title: 'Edit Book' }
    },
    // { path: '',
    //     redirectTo: '/books',
    //     pathMatch: 'full'
    // }
];

@NgModule({
    declarations: [
        BookComponent,
        BookDetailComponent,
        BookCreateComponent,
        BookEditComponent
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
