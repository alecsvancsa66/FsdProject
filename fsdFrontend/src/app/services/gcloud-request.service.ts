import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GcloudRequestService {
  baseUrl = 'https://us-central1-fsdproject-310513.cloudfunctions.net/helloWorld';

  constructor(private http: HttpClient) {}

  getFromCloud(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
