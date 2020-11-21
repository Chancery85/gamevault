import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  userExists = true;
  isLoading = false;
  error: string = null;
  loginForm: FormGroup;
  newUserForm: FormGroup;


  constructor(
    private authService: AuthService,
    private route: Router,
  ) { }

  ngOnInit() {
    this.initLoginForm();
    this.initNewUserForm();
  }

  onSubmitExists(form: FormGroup) {
    if(!form.valid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    this.isLoading = true;
    this.authService.login(email, password).subscribe(resData => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.route.navigate(['/home']);
    }, errorDisplayed => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.error = errorDisplayed;
    });

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
      this.route.navigate(['/home']);
    }, errorDisplayed => {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.error = errorDisplayed;
    });
    form.reset();
  }

  private initLoginForm() {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    })
  }

  private initNewUserForm() {
    this.newUserForm = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.required),
      'confirmPass': new FormControl('', [Validators.required, this.matchValues('password')])
    })
    this.newUserForm.controls['password'].valueChanges.subscribe(() => {
      this.newUserForm.controls['confirmPass'].updateValueAndValidity();
    });
  }

  matchValues(
    matchTo: string // name of the control to match to
  ): (AbstractControl) => ValidationErrors | null {
    return (control: AbstractControl): ValidationErrors | null => {
      return !!control.parent &&
      !!control.parent.value &&
      control.value === control.parent.controls[matchTo].value
        ? null
        : { isMatching: false };
    };
  }

}
