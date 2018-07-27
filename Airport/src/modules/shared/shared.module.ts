import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ApiService} from './services';
import {FlightsService} from './services/flights.service';
import {AgeFormPipe} from './pipes/age-form.pipe';
import {MaterialModule} from '../material/material.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        RouterModule,
    ],
    declarations: [
        AgeFormPipe
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        AgeFormPipe
    ]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                ApiService,
                FlightsService,
                AgeFormPipe
            ]
        };
    }
}
