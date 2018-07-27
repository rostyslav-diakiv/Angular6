import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services';
import {Observable} from 'rxjs';
import {PilotDto} from '../../shared/models';
import {PilotRequest} from '../models';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PilotsService {
    private readonly ctrlUrl = 'Pilots';
    constructor(private _apiService: ApiService) { }

    getPilots(): Observable<PilotDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getPilot(id: number): Observable<PilotDto> {
        return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deletePilot(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createPilot(form: FormGroup): Observable<PilotDto> {
        const pilotRequest: PilotRequest = {
            name: form.controls['name'].value,
            familyName: form.controls['familyName'].value,
            dateOfBirth: form.controls['dateOfBirth'].value,
            experience: `${form.controls['experience'].value}:0:0`
        };

        return this._apiService.post(`/${this.ctrlUrl}`, pilotRequest);
    }

    updatePilot(id: number, form: FormGroup): Observable<PilotDto> {
        const pilotRequest: PilotRequest = {
            name: form.controls['name'].value,
            familyName: form.controls['familyName'].value,
            dateOfBirth: form.controls['dateOfBirth'].value,
            experience: `${form.controls['experience'].value}:0:0`
        };

        return this._apiService.put(`/${this.ctrlUrl}/${id}`, pilotRequest);
    }
}
