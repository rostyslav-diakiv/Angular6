import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {NgForm} from '@angular/forms';
import {FlightDto} from '../../../shared/models/flight-dto';
import {ApiService} from '../../../shared/services';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
    private readonly ctrlUrl = 'Flights';
    constructor(private _apiService: ApiService) { }

    getStewardesses(): Observable<FlightDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getStewardess(id: number): Observable<FlightDto> {
            return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deleteStewardess(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createStewardessForm(form: NgForm): Observable<FlightDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, form);
    }

    updateStewardessForm(id: number, form: NgForm): Observable<Response> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, form);
    }
}
