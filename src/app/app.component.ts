import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { Observable } from 'rxjs';
import { loginCheck, loginOut, selectUser, selectUserIsLoading } from '@auth-lib';
import { UserModel } from 'mf-auth-lib';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { CustomManifest, CustomRemoteConfig } from './utils/config';
import { getManifest } from '@angular-architects/module-federation';
import { buildRoutes } from './utils/routes';
import { ButtonModule, InputFileModule, InputSelectModule } from 'myrta-ui';

@Component({
  imports: [
    RouterOutlet,
    CommonModule,
    RouterLink,
    ButtonModule,
    InputSelectModule,
    InputFileModule
  ],
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent implements OnInit {
  public isLoading$: Observable<boolean> = this._store.select(selectUserIsLoading);
  public user!: UserModel
  public remotes: CustomRemoteConfig[] = [];

  constructor(private _store: Store, private _router: Router) {
    this._store.dispatch(loginCheck())
  }

  async ngOnInit(): Promise<void> {
    const manifest = getManifest<CustomManifest>();
    const routes = buildRoutes(manifest);

    this._router.resetConfig(routes);

    this.remotes = Object.values(manifest);

    this._store.select(selectUser).subscribe((result) => {
      if (result) {
        this.user = result
      }
    })
  }

  logout() {
    this._store.dispatch(loginOut())
  }
}
