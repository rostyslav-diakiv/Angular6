import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services';
import {Observable, of} from 'rxjs';
import {PilotDto} from '../../shared/models';
import {PilotRequest} from '../models';
import {TimeSpan} from '../../shared/models/time-span';

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
        if (id === 0) {
            return of(this.initializePilot());
        }
        return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deletePilot(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    savePilot(pilot: PilotDto): Observable<PilotDto> {
        const pilotRequest: PilotRequest = {
          name: pilot.name,
          familyName: pilot.familyName,
          dateOfBirth: pilot.dateOfBirth,
          experience: `${pilot.experienceAge.days}:0:0`
        };

        if (pilot.id === 0) {
            return this.createPilot(pilotRequest);
        }
        return this.updatePilot(pilot.id, pilotRequest);
    }

    createPilot(pilot: PilotRequest): Observable<PilotDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, pilot);
    }

    updatePilot(id: number, pilot: PilotRequest): Observable<PilotDto> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, pilot);
    }

    initializePilot(): PilotDto {
        // Return an initialized object
        // const productDto = new PilotDto();
        // productDto.id = '0';
        // productDto.name = null;
        // productDto.priceInCents = null;
        // productDto.durationInDay = null;
        // productDto.type = null;
        // productDto.dateOfBirth = null;
        //
        // return productDto;

        const pilotDto: PilotDto = {
            id: 0,
            name: null,
            familyName: null,
            experienceAge: null,
            dateOfBirth: new Date(),
            age: {
                years: 1,
                months: 1,
                days: 1
            }
        };

        return pilotDto;
    }
}
