import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  signInForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })


  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) { }





  ngOnInit(): void {

  }

  onSubmit() {
    this.authService.login({
      email: this.signInForm.value.email,
      password: this.signInForm.value.passord

    })
  }

}
