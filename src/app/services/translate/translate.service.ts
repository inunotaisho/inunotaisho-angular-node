import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TranslateService {

   constructor(private http: HttpClient) {
        this.getJSON().subscribe(data => {
            
        });
    }

    public getJSON(): Observable<any> {
        return this.http.get("../assets/i18n/en.json")
    }

}