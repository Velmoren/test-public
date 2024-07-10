import { UserModel } from '../models/user.model';


export interface UserState {
  user: UserModel
  isLoading: boolean;
  isLogin: boolean;
}

export const initialUserState: UserState = {
  user: {
    login: '',
    password: '',
  },
  isLoading: false,
  isLogin: false
};
