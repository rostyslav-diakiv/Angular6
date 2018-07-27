import {FlightDto} from './flight-dto';
import {PlaneDto} from './plane-dto';

export interface DepartureDto {
    id: number;
    departureTime: Date;
    flight: FlightDto;
    crewId: number;
    plane: PlaneDto;
}
