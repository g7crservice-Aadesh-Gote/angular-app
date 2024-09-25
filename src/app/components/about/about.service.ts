import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private apiUrl = 'https://dummyjson.com/users'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getAboutData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}