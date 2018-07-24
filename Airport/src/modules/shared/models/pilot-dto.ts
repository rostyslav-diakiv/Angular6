import {Age} from './age';

export interface PilotDto {
    Id: number;
    FamilyName: string;
    Name: string;
    DateOfBirth: Date;
    Experience: string; // TimeSpan
    Age: Age;
}
