import {Injectable} from '@angular/core';
import {PilotDto} from '../../shared/models';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable, of as observableOf, of} from 'rxjs';
import {PilotsService} from './pilots.service';
import {catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PilotResolver implements Resolve<PilotDto> {

    constructor(private _pilotsService: PilotsService,
                private router: Router) {
    }

    resolve(route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot): Observable<PilotDto> {
        const id = route.paramMap.get('id');

        return this._pilotsService.getPilot(+id)
            .pipe(map(pilot => {
                    if (pilot) {
                        return pilot;
                    }
                    console.log(`Pilot was not found: ${id}`);
                    this.router.navigate(['/pilots']);
                    return null;
                }), catchError(error => {
                    console.log(`Retrieval error: ${error}`);
                    this.router.navigate(['/pilots']);
                    return observableOf(null);
                }));
    }
}
