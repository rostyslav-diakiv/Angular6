import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ErrorComponent} from './components/error/error.component';

const routes: Routes = [
    {
        path: 'pilots',
        // data: { preload: true },
        loadChildren: 'src/modules/pilots/pilots.module#PilotsModule'
    },
    {
        path: 'stewardesses',
        loadChildren: 'src/modules/stewardesses/stewardesses.module#StewardessesModule'
    },
    {
        path: 'flights',
        loadChildren: 'src/modules/flights/flights.module#FlightsModule'
    },
    {
        path: 'tickets',
        loadChildren: 'src/modules/tickets/tickets.module#TicketsModule'
    },
    {
        path: 'planeTypes',
        loadChildren: 'src/modules/plane-types/plane-types.module#PlaneTypesModule'
    },
    {
        path: 'crews',
        loadChildren: 'src/modules/crews/crews.module#CrewsModule'
    },
    {
        path: 'planes',
        loadChildren: 'src/modules/planes/planes.module#PlanesModule'
    },
    {
        path: 'departures',
        loadChildren: 'src/modules/departures/departures.module#DeparturesModule'
    },
    {path: '404', component: ErrorComponent},
    {path: '', redirectTo: 'pilots', pathMatch: 'full'},
    // otherwise redirect to 404 page
    {path: '**', component: ErrorComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
