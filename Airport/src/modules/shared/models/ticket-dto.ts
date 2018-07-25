import {FlightDto} from './flight-dto';

export interface TicketDto {
    id: number;
    price: number;
    flight: FlightDto;
}
