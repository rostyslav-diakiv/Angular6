import {PilotDto} from './pilot-dto';
import {StewardessDto} from './stewardess-dto';

export interface CrewDto {
    Id: number;
    Pilot: PilotDto;
    Stewardesses: StewardessDto[];
}
