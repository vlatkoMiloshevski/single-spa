import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoversModule } from './covers/cover.module';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { MoviesModule } from './movies/movie.module';
import { ApiService } from './services/api-service';
import { ErrorService } from './services/error-handler.service';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    HttpClientModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'NgRx - Angular Redux Demo',
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot(),
    FormsModule,
    MoviesModule,
    CoversModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/appngrx' },
    ErrorService,
    ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
