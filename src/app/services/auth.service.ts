import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  constructor(private http: HttpClient) { }

  
  loginClave(user: { username: string; password: string; }): Observable<any> {
    return this.http.post("localhost:8080/api/v1/login-clave", user);
  }

}
