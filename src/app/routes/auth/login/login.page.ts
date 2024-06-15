import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

import { LoginReqModel } from '@core/models/auth.model';
import { ErrorModel } from '@core/models/error.model';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css',
})
export class LoginPage {
  protected loginForm = new FormGroup({
    emailOrUsername: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.authService.checkToken()) this.router.navigate(['/']);
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const { emailOrUsername, password } = this.loginForm.value;
      const user: LoginReqModel = {
        emailOrUsername: emailOrUsername!,
        password: password!,
      };

      this.authService.login(user).subscribe({
        next: (data) => {
          if (this.authService.checkToken()) this.router.navigate(['/']);
          console.log('Inicio de Sessión Correctamente');
        },
        error: (err: HttpErrorResponse) => {
          const { message, statusCode } = err.error as ErrorModel;
          console.log(`Ocurrio un error ${statusCode} (${message.toString()})`);
        },
      });

      this.loginForm.reset();
    }
  }
}
