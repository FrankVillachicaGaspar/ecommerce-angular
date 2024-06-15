import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';

import { environment } from '../../../environments/environment';
import { LoginReqModel, LoginRespModel } from '@core/models/auth.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly URL = environment.ENDPOINTS.BASE_URL;

  constructor(private http: HttpClient, private cookie: CookieService) {}

  login(data: LoginReqModel): Observable<LoginRespModel> {
    return this.http.post<LoginRespModel>(`${this.URL}/auth`, data).pipe(
      tap((res) => {
        const { access_token, user } = res;
        this.setToken(access_token);
      })
    );
  }

  private setToken(token: string) {
    this.cookie.set('token', token, {
      path: '/', // disponible en todas las rutas
      secure: environment.cookieSecure, // Solo enviar sobre HTTPS
      sameSite: 'Strict', // Prevenir CSRF
      expires: 7, // expira en 7 dias
    });
  }

  getToken(): string {
    return this.cookie.get('token');
  }

  checkToken(): boolean {
    return this.cookie.check('token');
  }

  deleteToken() {
    this.cookie.delete('token', '/');
  }
}
