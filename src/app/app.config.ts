import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { EFFECTS } from './store/app.effects';
import { appReducer } from './store/app.reducer';
import { AuthModule } from '@auth-lib';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(APP_ROUTES),
    provideHttpClient(),
    importProvidersFrom(
      AuthModule,
      StoreModule.forRoot(appReducer),
      StoreRouterConnectingModule.forRoot(),
      StoreDevtoolsModule.instrument(),
      EffectsModule.forRoot(EFFECTS),
    )
  ]
};
