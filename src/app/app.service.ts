import {Injectable} from '@angular/core';
import {Http, Response}          from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';



@Injectable()
export class AppService {

    private apiUrl = 'http://localhost:8000/notes';  // URL to web API

    constructor(private http: Http) {
    }

    getNotes(): Observable<Response> {
        let httpPromise = this.http.get(this.apiUrl);
        return httpPromise;
    }

}