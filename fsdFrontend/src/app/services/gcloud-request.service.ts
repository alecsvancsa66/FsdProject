import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GcloudRequestService {
  getUrl =
    'https://us-central1-fsdproject-310513.cloudfunctions.net/helloWorld';

  postUrl = 'https://us-central1-fsdproject-310513.cloudfunctions.net/saveLog';

  constructor(private http: HttpClient) {}

  getPosts(): Observable<any> {
    return this.http.get(`${this.getUrl}`);
  }

  savePost(post: any): Observable<any> {
    return this.http.post(`${this.postUrl}`, post);
  }
}
