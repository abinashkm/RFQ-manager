import { Component } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';
import { TokenService } from '../../../core/services/token.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {

  form;

    constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // login() {
  //   if (this.form.invalid) return;

  //   this.auth.login(this.form.value).subscribe({
  //     next: (res) => {
  //       this.tokenService.save(res.token);
  //       console.log('JWT saved');
  //     },
  //     error: (err) => console.error(err)
  //   });
  // }
  login() {
  if (this.form.invalid) return;

  this.auth.login(this.form.value).subscribe({
    next: (res) => {
      console.log('Login response:', res);

      // 🔥 THIS is the critical line
      this.tokenService.save(res.token);

      console.log('Token in storage:', this.tokenService.get());

      this.router.navigate(['/']); // later → dashboard
    },
    error: err => console.error('Login failed', err)
  });
}

}
