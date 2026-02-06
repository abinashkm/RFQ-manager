import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private BASE_URL = 'http://localhost:8080';

  constructor(private http: HttpClient) {}

  register(data: any) {
    return this.http.post(`${this.BASE_URL}/users/register`, data);
  }

  login(data: any) {
    return this.http.post<{ token: string }>(
      `${this.BASE_URL}/auth/login`,
      data
    );
  }
}
