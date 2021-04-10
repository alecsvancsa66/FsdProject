import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  baseUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  uploadFile(url: string, file: File): Observable<any> {
    return this.http.post(`${this.baseUrl}/${url}`, file);
  }
}
