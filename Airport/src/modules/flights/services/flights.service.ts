import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {NgForm} from '@angular/forms';
import {FlightDto} from '../../shared/models';
import {ApiService} from '../../shared/services';
import {FlightRequest} from '../models';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
    private readonly ctrlUrl = 'Flights';
    constructor(private _apiService: ApiService) { }

    getFlights(): Observable<FlightDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getFlight(number: string): Observable<FlightDto> {
            return this._apiService.get(`/${this.ctrlUrl}/${number}`);
    }

    deleteFlight(number: string): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${number}`);
    }

    createFlightForm(form: NgForm): Observable<FlightDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, form);
    }

    updateFlightForm(number: string, form: FlightRequest): Observable<Response> {
        form.number = number;
        return this._apiService.put(`/${this.ctrlUrl}/${number}`, form);
    }
}
