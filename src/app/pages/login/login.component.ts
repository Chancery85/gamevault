import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userExists = true;
  isLoading = false;
  loginForm: FormGroup;
  newUserForm: FormGroup;


  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.initLoginForm();
    this.initNewUserForm();
  }

  onSubmitExists(form: FormGroup) {
    if(!form.valid) {
      return;
    }

    form.reset();
  }

  onSubmitNew(form: FormGroup) {
    if(!form.valid) return;
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    this.authService.signup(email, password).subscribe(resData => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000)
    }, error => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000)
    });
    form.reset();
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required)
    })
  }

  private initNewUserForm() {
    this.newUserForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'repeatPass': new FormControl('', Validators.required)
    })
  }

}
