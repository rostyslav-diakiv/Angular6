import {FlightDto} from './flight-dto';
import {PlaneDto} from './plane-dto';

export interface DepartureDto {
    Id: number;
    DepartureTime: Date;
    Flight: FlightDto;
    CrewId: number;
    Plane: PlaneDto;
}
