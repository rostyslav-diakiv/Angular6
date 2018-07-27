import {PlaneTypeDto} from './plane-type-dto';
import {Age} from './age';

export interface PlaneDto {
    id: number;
    name: string;
    creationDate: Date;
    lifeTimeAge: Age; // TimeSpan
    planeType: PlaneTypeDto;
}
