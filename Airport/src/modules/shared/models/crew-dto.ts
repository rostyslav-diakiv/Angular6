import {PilotDto} from './pilot-dto';
import {StewardessDto} from './stewardess-dto';

export interface CrewDto {
    id: number;
    pilot: PilotDto;
    stewardesses: StewardessDto[];
}
