import {Age} from './age';

export interface StewardessDto {
    id: number;
    familyName: string;
    name: string;
    dateOfBirth: Date;
    age: Age;
}
