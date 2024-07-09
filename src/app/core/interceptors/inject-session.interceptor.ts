import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@core/services/auth.service';
import { catchError, throwError } from 'rxjs';

export const injectSessionInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const token = authService.getToken();
  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`,
    },
  });

  return next(authReq).pipe(
    catchError((err: HttpErrorResponse) => {
      if (err) {
        // Handle HTTP errors
        if (err.status === 401) {
          console.log('Unauthorized access');
          console.log('Sesión expirada');
          router.navigate(['auth', 'login']);
        } else if (err.status === 403) {
          console.log('Forbidden access');
          console.log(
            'No tienes acceso para ver esta sección (Comunicarse con el Administrador)'
          );
        } else {
          console.error('An error occurred:', err);
        }
      } else {
        console.error('Error inesperado (interceptor):', err);
      }

      return throwError(() => err);
    })
  );
};
