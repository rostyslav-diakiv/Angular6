import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatInputModule, MatButtonModule, MatSelectModule, MatIconModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {SharedModule} from '../modules/shared/shared.module';
import { ErrorComponent } from './components/error/error.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HeaderComponent } from './components/layouts/header/header.component';

const APP_COMPONENTS: any[] = [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent
];

const APP_MODULES: any[] = [
    BrowserModule,
    AppRoutingModule,
    SharedModule.forRoot(),
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule
];

@NgModule({
    declarations: [
        APP_COMPONENTS,
    ],
    imports: [
        APP_MODULES
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
