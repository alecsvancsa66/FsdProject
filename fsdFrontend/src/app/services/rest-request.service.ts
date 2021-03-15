import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestRequestService {
  baseUrl = 'http://localhost:5000/';

  constructor(private http: HttpClient) { }

  get(url): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${url}`);
  }

  post(url): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, "");
  }

}
