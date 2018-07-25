import {Age} from './age';

export interface PilotDto {
    id: number;
    familyName: string;
    name: string;
    dateOfBirth: Date;
    experience: string; // TimeSpan
    age: Age;
}
