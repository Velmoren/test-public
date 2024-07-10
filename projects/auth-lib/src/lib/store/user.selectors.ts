import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './user.state';
import { USER_MODULE_NAME } from '../constants';

export const selectUserState = createFeatureSelector<UserState>(USER_MODULE_NAME);

export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state?.user
);

export const selectUserIsLogin = createSelector(
  selectUserState,
  (state: UserState) => state?.isLogin
);

export const selectUserIsLoading = createSelector(
  selectUserState,
  (state: UserState) => state?.isLoading
);
