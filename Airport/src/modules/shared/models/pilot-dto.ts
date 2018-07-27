import {Age} from './age';

export interface PilotDto {
    id: number;
    familyName: string;
    name: string;
    dateOfBirth: Date;
    experienceAge: Age; // TimeSpan
    age: Age;
}
