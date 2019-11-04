import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ApiService } from '../services/api-service';
import { ErrorService } from '../services/error-handler.service';
import { MaterialModule } from '../shared/material.module';
import { coversReducer } from '../state/cover.reducer';
import { CoversComponent } from './cover.component';

const moviesRoutes: Routes = [];

@NgModule({
    declarations: [
        CoversComponent
    ],
    imports: [
        MaterialModule,
        HttpClientModule,
        BrowserModule,
        FormsModule,
        RouterModule.forChild(moviesRoutes),
        StoreModule.forFeature('covers', coversReducer),
        StoreRouterConnectingModule.forRoot(),
    ],
    providers: [
        ErrorService,
        ApiService
    ]
})
export class CoversModule { }
