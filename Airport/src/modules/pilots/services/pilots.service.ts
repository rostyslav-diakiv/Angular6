import { Injectable } from '@angular/core';
import {ApiService} from '../../shared/services';
import {Observable, of} from 'rxjs';
import {PilotDto} from '../../shared/models';
import {PilotRequest} from '../models';

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
          Name: pilot.Name,
          FamilyName: pilot.FamilyName,
          DateOfBirth: pilot.DateOfBirth,
          Experience: pilot.Experience
        };

        if (pilot.Id === 0) {
            return this.createPilot(pilotRequest);
        }
        return this.updatePilot(pilot.Id, pilotRequest);
    }

    createPilot(product: PilotRequest): Observable<PilotDto> {
        return this._apiService.post(`/${this.ctrlUrl}`, product);
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
        // productDto.description = null;
        //
        // return productDto;

        const pilotDto: PilotDto = {
            Id: 0,
            Name: null,
            FamilyName: null,
            Experience: '00:00:00',
            DateOfBirth: new Date(),
            Age: {
                Years: 1,
                Months: 1,
                Days: 1
            }
        };

        return pilotDto;
    }
}
