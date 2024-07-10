import { createAction, props } from '@ngrx/store';
import { UserModel } from '../models/user.model';

export enum UserActionEnum {
  LoginPending = '[User] Login Pending',
  LoginSuccess = '[User] Login Success',
  LoginError = '[User] Login Error',
  LoginCheck = '[User] Login Check',
  LoginOut = '[User] Login Out',
}

export const loginPending = createAction(
  UserActionEnum.LoginPending,
  props<{user: UserModel}>()
);

export const loginSuccess = createAction(
  UserActionEnum.LoginSuccess,
  props<{user: UserModel}>()
);

export const loginError = createAction(
  UserActionEnum.LoginError
);

export const loginCheck = createAction(
  UserActionEnum.LoginCheck
);

export const loginOut = createAction(
  UserActionEnum.LoginOut
);
