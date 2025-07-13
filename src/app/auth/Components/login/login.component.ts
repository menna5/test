import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  http = inject(HttpClient);

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // API link source: https://dummyjson.com/docs/auth
      this.http.post('https://dummyjson.com/auth/login', this.loginForm.value).subscribe();
    }
  }

  onGoogleLogin(): void {
    console.log('Google login clicked');
    // Add your Google Auth logic here
  }

  onForgotPassword(): void {
    console.log('Forgot password clicked');
    // Navigate to Forgot Password page or modal
  }
}
