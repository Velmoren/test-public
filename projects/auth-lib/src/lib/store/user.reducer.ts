import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';
import { initialUserState, UserState } from './user.state';

export const userReducerCreator = createReducer(
  initialUserState,
  on(UserActions.loginPending, (state) => (
    {...state, isLoading: true}
  )),
  on(UserActions.loginSuccess, (state, {user}) => (
    {...state, isLoading: false, isLogin: true, user}
  )),
  on(UserActions.loginError, (state) => ({...state, isLoading: false, isLogin: true})),
  on(UserActions.loginCheck, (state) => ({...state, isLoading: true})),
  on(UserActions.loginOut, (state) => (
    {...state, isLogin: true, user: {login: '', password: ''}}
  )),
);

export function userReducer(state: UserState | undefined, action: Action) {
  return userReducerCreator(state, action);
}
