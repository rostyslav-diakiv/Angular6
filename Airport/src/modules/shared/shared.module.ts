import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {ApiService} from './services';

@NgModule({
  imports: [
      CommonModule,
      FormsModule,
      RouterModule
  ],
  declarations: [],
    exports: []
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule,
            providers: [
                ApiService
            ]
        };
    }
}
