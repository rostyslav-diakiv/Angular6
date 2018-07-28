import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services';
import {Observable, of} from 'rxjs';
import { StewardessDto} from '../../shared/models';
import { StewardessRequest} from '../models';
import {NgForm} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class StewardessesService {
    private readonly ctrlUrl = 'Stewardesses';
    constructor(private _apiService: ApiService) { }

    getStewardesses(): Observable<StewardessDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getStewardess(id: number): Observable<StewardessDto> {
        return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deleteStewardess(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createStewardess(request: StewardessRequest): Observable<StewardessDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, request);
    }

    createStewardessForm(form: NgForm): Observable<StewardessDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, form);
    }


    updateStewardess(id: number, request: StewardessRequest): Observable<StewardessDto> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, request);
    }

    updateStewardessForm(id: number, form: NgForm): Observable<StewardessDto> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, form);
    }
}
