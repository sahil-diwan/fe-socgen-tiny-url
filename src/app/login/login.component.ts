import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService: AuthService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: ['']
    });
  }

  get f(): any { return this.loginForm.controls; }

  login(): void {
    this.authService.login(
      {
        username: this.f.username.value,
        password: this.f.password.value
      }
    )
    .subscribe(success => {
      if (success) {
        this.router.navigate(['/landing']);
      }
    });
  }
}
