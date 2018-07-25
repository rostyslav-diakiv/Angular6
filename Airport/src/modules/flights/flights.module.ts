import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {CdkTableModule} from '@angular/cdk/table';
import {OverlayModule} from '@angular/cdk/overlay';
import {
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule
} from '@angular/material';

import {TableTestComponent} from './components/table-test/table-test.component';
import {RouterModule, Routes} from '@angular/router';


/**
 * NgModule that includes all Material modules that are required to serve
 * the Plunker.
 */
@NgModule({
    exports: [
        // CDk
        CdkTableModule,
        OverlayModule,

        // Material
        MatAutocompleteModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatDatepickerModule,
        MatDialogModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSlideToggleModule,
        MatSliderModule,
        MatSnackBarModule,
        MatTabsModule,
        MatTableModule,
        MatToolbarModule,
        MatTooltipModule,

        MatNativeDateModule,
        MatSortModule,
        MatPaginatorModule
    ]
})export class PlunkerMaterialModule {}

const flightsRoutes: Routes = [
    {
        // flights
        path: '',
        component: TableTestComponent,
        data: { title: 'Book Details' }
    },
    // {
    //     // stwardesses/details/2
    //     path: 'details/:id',
    //     component: StewardessDetailComponent,
    //     data: { title: 'Book Details' }
    // },
    // {
    //     // stwardesses/create
    //     path: 'create',
    //     component: StewardessCreateComponent,
    //     data: { title: 'Create Book' }
    // },
    // {
    //     // stwardesses/edit/2
    //     path: 'edit/:id',
    //     component: StewardessEditComponent,
    //     data: { title: 'Edit Book' }
    // },
    // { path: '',
    //     redirectTo: '/stewardesses',
    //     pathMatch: 'full'
    // }
];


@NgModule({

    imports: [
        CommonModule,
        HttpClientModule,
        PlunkerMaterialModule,
        RouterModule.forChild(flightsRoutes),
    ],

    declarations: [TableTestComponent],
    providers: []
})
export class FlightsModule { }
