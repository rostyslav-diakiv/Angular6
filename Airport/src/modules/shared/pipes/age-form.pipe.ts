import {Pipe, PipeTransform} from '@angular/core';
import {Age} from '../models';

@Pipe({
    name: 'ageForm'
})
export class AgeFormPipe implements PipeTransform {

    transform(value: Age, args?: string): string {
        if (value === null) {
            return 'no age';
        }
        if (args === 'short') {
            return `${value.years}y, ${value.months}m, ${value.days}d`;
        }
        if (args === 'long') {
            return `${value.years} years, ${value.months} months, ${value.days} days`;
        }
        if (args === 'medium') {
            return `${value.years} yrs, ${value.months} mos, ${value.days} ds`;
        }
        return `${value.years}y, ${value.months}m, ${value.days}d`;
    }

}
