import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
  // {path: 'login', loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule)},
  // {
  //   path: 'profile',
  //   loadChildren: () => loadRemoteModule({
  //     type: 'module',
  //     remoteEntry: 'http://localhost:4201/remoteEntry.js',
  //     exposedModule: './Module'
  //   }).then(m => m.ProfilePageModule)
  // }
];
