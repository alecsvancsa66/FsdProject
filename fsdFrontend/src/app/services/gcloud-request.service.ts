import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GcloudRequestService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getFromCloud(url: String): Observable<any> {
    return this.http.get(`${this.baseUrl}/${url}`);
  }
}
