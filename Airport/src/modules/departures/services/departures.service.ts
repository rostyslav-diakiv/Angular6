import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services';
import {DepartureDto} from '../../shared/models';
import {DepartureRequest} from '../models/departure-request';

@Injectable({
  providedIn: 'root'
})
export class DeparturesService {
    private readonly ctrlUrl = 'Departures';
    constructor(private _apiService: ApiService) { }

    getDepartures(): Observable<DepartureDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getDeparture(id: number): Observable<DepartureDto> {
            return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deleteDeparture(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createDepartureForm(form: FormGroup): Observable<DepartureDto> {
        const request: DepartureRequest = {
            departureTime: form.controls['departureTime'].value,
            flightNumber: form.controls['flight'].value.number,
            crewId: form.controls['crew'].value.id,
            planeId: form.controls['plane'].value.id,
        };

        return this._apiService.post(`/${this.ctrlUrl}`, request);
    }

    updateDepartureForm(id: number, form: FormGroup): Observable<Response> {
        const request: DepartureRequest = {
            departureTime: form.controls['departureTime'].value,
            flightNumber: form.controls['flight'].value.number,
            crewId: form.controls['crew'].value.id,
            planeId: form.controls['plane'].value.id,
        };

        return this._apiService.put(`/${this.ctrlUrl}/${id}`, request);
    }
}
