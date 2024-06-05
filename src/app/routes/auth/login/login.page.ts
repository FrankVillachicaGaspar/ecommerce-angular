import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.page.html',
  styleUrl: './login.page.css'
})
export class LoginPage {
  protected loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })


  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      // this.authService.login(this.loginForm.value)
      // .subscribe((data: any) => {
      //   if(this.authService.isLoggedIn()){
      //     this.router.navigate(['/admin']);
      //   }
      //   console.log(data);
      // });
    }
  }
}
