import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UserModel, loginPending } from 'mf-auth-lib';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent {
  public model: UserModel = {
    login: '',
    password: ''
  }

  constructor(private _store: Store) {
  }

  loginForm() {
    this._store.dispatch(loginPending({user: this.model}))
  }
}
