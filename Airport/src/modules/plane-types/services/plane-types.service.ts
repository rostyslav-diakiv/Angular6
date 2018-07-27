import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services';
import {Observable, of} from 'rxjs';
import {PlaneTypeDto} from '../../shared/models';
import {NgForm} from '@angular/forms';
import {PlaneTypeRequest} from '../models/plane-type-request';

@Injectable({
  providedIn: 'root'
})
export class PlaneTypesService {
    private readonly ctrlUrl = 'PlaneTypes';
    constructor(private _apiService: ApiService) { }

    getPlaneTypes(): Observable<PlaneTypeDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getPlaneType(id: number): Observable<PlaneTypeDto> {
        if (id === 0) {
            return of(this.initializePlaneType());
        }
        return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deletePlaneType(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    savePlaneType(dto: PlaneTypeDto): Observable<PlaneTypeDto> {
        const request: PlaneTypeRequest = {
            planeModel: dto.planeModel,
            maximalCarryingCapacityKg: dto.maximalCarryingCapacityKg,
            maximalNumberOfPlaces: dto.maximalNumberOfPlaces
        };

        if (dto.id === 0) {
            return this.createPlaneType(request);
        }
        return this.updatePlaneType(dto.id, request);
    }

    createPlaneType(request: PlaneTypeRequest): Observable<PlaneTypeDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, request);
    }

    createPlaneTypeForm(form: NgForm): Observable<PlaneTypeDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, form);
    }


    updatePlaneType(id: number, request: PlaneTypeRequest): Observable<PlaneTypeDto> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, request);
    }

    updatePlaneTypeForm(id: number, form: NgForm): Observable<PlaneTypeDto> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, form);
    }

    initializePlaneType(): PlaneTypeDto {
        const dto: PlaneTypeDto = {
            id: 0,
            planeModel: '',
            maximalCarryingCapacityKg: 0,
            maximalNumberOfPlaces: 0
        };

        return dto;
    }
}
