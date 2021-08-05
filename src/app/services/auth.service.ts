import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from '../models/user';

interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) {
  }

  handleError(errorRes: HttpErrorResponse): Observable<any> {
    let errorDisplayed = 'An unknown error has occurred.';
    if (!errorRes.error || !errorRes.error.error){
      return throwError(errorDisplayed);
    }
    switch (errorRes.error.error.message){
      case 'INVALID_PASSWORD':
        errorDisplayed = 'Invalid password was entered.';
        break;
      case 'EMAIL_NOT_FOUND':
        errorDisplayed = 'No user by that e-mail found.';
        break;
      case 'USER_DISABLED':
        errorDisplayed = 'The user has been disabled by admin.';
        break;
      case 'TOO_MANY_ATTEMPTS_TRY_LATER':
        errorDisplayed = 'You have tried to log in too many times. Try again later';
        break;
    }
    return throwError(errorDisplayed);
  }

  private handleAuth(email: string, userId: string, token: string, expiresIn: number): void {
    const expDate = new Date(new Date().getTime() + expiresIn * 1000);
    const user = new User(
      email,
      userId,
      token,
      expDate
    );
    this.user.next(user);
  }

  signup(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBe9-eihP_QgbDkldQriTRGdL4ZTaxdtJY', {
      // body needs 3 properties the endpoint expects
      email,
      password,
      returnSecureToken: true
    })
      .pipe(
        catchError(this.handleError),
        tap(
          resData => {
            this.handleAuth(
              resData.email,
              resData.idToken,
              resData.localId,
              +resData.expiresIn
            );
          }
        )
      );
  }

  login(email: string, password: string): Observable<AuthResponseData> {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBe9-eihP_QgbDkldQriTRGdL4ZTaxdtJY', {
      email,
      password,
      returnSecureToken: true
    })
      .pipe(
        catchError(this.handleError),
        tap(
          resData => {
            this.handleAuth(
              resData.email,
              resData.idToken,
              resData.localId,
              +resData.expiresIn
            );
          }
        )
      );
  }
}
