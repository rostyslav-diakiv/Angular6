import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {FormGroup} from '@angular/forms';
import {ApiService} from '../../shared/services';
import {TicketRequest} from '../models';
import {TicketDto} from '../../shared/models';

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
    private readonly ctrlUrl = 'Tickets';
    constructor(private _apiService: ApiService) { }

    getTickets(): Observable<TicketDto[]> {
        return this._apiService.get(`/${this.ctrlUrl}`);
    }

    getTicket(id: number): Observable<TicketDto> {
            return this._apiService.get(`/${this.ctrlUrl}/${id}`);
    }

    deleteTicket(id: number): Observable<Response> {
        return this._apiService.delete(`/${this.ctrlUrl}/${id}`);
    }

    createTicketForm(form: FormGroup): Observable<TicketDto> {
        const request: TicketRequest = {
            flightNumber: form.controls['flightControl'].value.number,
            price: form.controls['price'].value
        };
        return this._apiService.post(`/${this.ctrlUrl}`, request);
    }

    updateTicketForm(id: number, form: TicketRequest): Observable<Response> {
        return this._apiService.put(`/${this.ctrlUrl}/${id}`, form);
    }
}
