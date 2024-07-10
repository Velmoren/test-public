import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import * as UserActions from './user.actions';
import { EMPTY, of } from 'rxjs';
import { UserState } from './user.state';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { UserModel } from '@auth-lib';

@Injectable()
export class UserEffects {
  constructor(
    private actions$: Actions,
    private store: Store<UserState>,
    private userService: UserService,
    private _router: Router
  ) {}

  login$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loginPending),
    switchMap(({user}) => {
      if (user.login === 'admin' && user.password === '123') {
        localStorage.setItem('user', JSON.stringify(user))

        this._router.navigate(['/'])

        return of(UserActions.loginSuccess({user}))
      } else {
        return of(UserActions.loginError())
      }
    }),
  ))

  checkLogin$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loginCheck),
    switchMap(() => {
      const storage = localStorage.getItem('user')

      if (storage) {
        const user: UserModel = JSON.parse(storage)

        return of(UserActions.loginSuccess({user}))
      } else {
        return of(UserActions.loginError())
      }
    }),
  ))

  logout$ = createEffect(() => this.actions$.pipe(
    ofType(UserActions.loginOut),
    switchMap(() => {
      localStorage.removeItem('user')

      this._router.navigate(['/'])

      return of(UserActions.loginError())
    }),
  ))

  private catchErrorHandler = (err: any, cauhgt: any) => {
    return of(UserActions.loginError());
  };
}
