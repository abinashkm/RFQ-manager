import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ApiService {

  private readonly BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  post<T>(url: string, body: any) {
    return this.http.post<T>(`${this.BASE_URL}${url}`, body);
  }

  get<T>(url: string) {
    return this.http.get<T>(`${this.BASE_URL}${url}`);
  }
}
