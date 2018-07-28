import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from '../modules/shared/shared.module';
import {ErrorComponent} from './components/error/error.component';

const APP_COMPONENTS: any[] = [
    AppComponent,
    ErrorComponent
];

const APP_MODULES: any[] = [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    SharedModule,
];

@NgModule({
    declarations: [
        APP_COMPONENTS,
    ],
    imports: [
        APP_MODULES
    ],
    exports: [
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
