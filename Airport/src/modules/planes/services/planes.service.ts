import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services';
import {PlaneDto} from '../../shared/models';
import {PlaneRequest} from '../models/plane-request';

@Injectable({
  providedIn: 'root'
})
export class PlanesService {
    private readonly ctrlUrl = 'Planes';
    constructor(private _apiService: ApiService) { }

    getPlanes(): Observable<PlaneDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getPlane(id: number): Observable<PlaneDto> {
            return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deletePlane(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createPlaneForm(form: FormGroup): Observable<PlaneDto> {
        const request: PlaneRequest = {
            name: form.controls['name'].value,
            creationDate: form.controls['creationDate'].value,
            lifeTime: `${form.controls['lifeTimeAge'].value}:00:00`,
            planeTypeId: form.controls['type'].value.id,
        };

        return this._apiService.post(`/${this.ctrlUrl}`, request);
    }

    updatePlaneForm(id: number, form: FormGroup): Observable<Response> {
        const request: PlaneRequest = {
            name: form.controls['name'].value,
            creationDate: form.controls['creationDate'].value,
            lifeTime: `${form.controls['lifeTimeAge'].value}:00:00`,
            planeTypeId: form.controls['type'].value.id,
        };

        return this._apiService.put(`/${this.ctrlUrl}/${id}`, request);
    }
}
