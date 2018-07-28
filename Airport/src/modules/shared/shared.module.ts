import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AgeFormPipe} from './pipes/age-form.pipe';
import {MaterialModule} from '../material/material.module';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ApiService} from './services';

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
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        HttpClientModule,
        AgeFormPipe
    ],
    providers: [
        ApiService
    ]
})
export class SharedModule {
}
