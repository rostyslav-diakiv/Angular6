import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ErrorComponent} from './components/error/error.component';

const routes: Routes = [
    { path: 'pilots',
        // data: { preload: true },
        loadChildren: 'src/modules/pilots/pilots.module#PilotsModule'},
    // Lazy loads the modules that accessible only for authorized users
    { path: 'stewardesses',
        // data: { preload: true },
        loadChildren: 'src/modules/stewardesses/stewardesses.module#StewardessesModule'},
    { path: 'flights',
        // data: { preload: true },
        loadChildren: 'src/modules/flights/flights.module#FlightsModule'},
    { path: '404', component: ErrorComponent },
    { path: '', redirectTo: 'pilots', pathMatch: 'full'},
    // otherwise redirect to 404 page
    { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
