import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services';
import {CrewDto} from '../../shared/models';
import {CrewRequest} from '../models/crew-request';

@Injectable({
  providedIn: 'root'
})
export class CrewsService {
    private readonly ctrlUrl = 'Crews';
    constructor(private _apiService: ApiService) { }

    getCrews(): Observable<CrewDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getCrew(id: number): Observable<CrewDto> {
            return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deleteCrew(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createCrewForm(form: FormGroup): Observable<CrewDto> {
        const stewIds = form.get('stews').value.map(s => s.id);

        const request: CrewRequest = {
            pilotId: form.controls['pilot'].value.id,
            stewardessesIds: stewIds
        };
        return this._apiService.post(`/${this.ctrlUrl}`, request);
    }

    updateCrewForm(id: number, form: FormGroup): Observable<Response> {
        const request: CrewRequest = {
            pilotId: form.controls['pilot'].value.id,
            stewardessesIds: form.get('stews').value.map(s => s.id)
        };

        return this._apiService.put(`/${this.ctrlUrl}/${id}`, request);
    }
}
