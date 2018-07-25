import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {environment} from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(
        private http: HttpClient,
    ) {
    }

    // private formatErrors(error: any) {
    //     return new ErrorObservable(error.error);
    // }

    public get(path: string, params: HttpParams = new HttpParams()): Observable<any> {
        return this.http.get(`${environment.api_url}${path}`, {params})
            .pipe(catchError(err => throwError(err)));
    }

    public put(path: string, body: Object = {}): Observable<any> {
        debugger;
        return this.http.put(`${environment.api_url}${path}`, body)
            .pipe(catchError(err => {
                    console.log(err);
                    return throwError(err);
                }
            ));
    }

    public post(path: string, body: Object = {}): Observable<any> {
        return this.http.post(`${environment.api_url}${path}`, JSON.stringify(body))
            .pipe(catchError(err => throwError(err)));
    }

    public delete(path): Observable<any> {
        return this.http.delete(`${environment.api_url}${path}`)
            .pipe(catchError(err => throwError(err)));
    }
}
