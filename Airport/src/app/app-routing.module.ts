import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './components/error/error.component';

const routes: Routes = [
    { path: 'products',
        // data: { preload: true },
        loadChildren: 'src/modules/pilots/pilots.module#PilotsModule'},
    // Lazy loads the modules that accessible only for authorized users
    { path: 'books',
        // data: { preload: true },
        loadChildren: 'src/modules/books/books.module#BooksModule'},
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: 'products', pathMatch: 'full'},
    // otherwise redirect to 404 page
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
