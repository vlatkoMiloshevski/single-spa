import { Component, forwardRef, Inject, OnDestroy } from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import { IAppState, CounterActions } from "./store";
import { Globals } from "./globals.service";
import * as angularImg from "../assets/angular-logo.png";

@Component({
    selector: 'app2',
    template: `
    <div style="margin-top: 100px;">
    <img [src]="angularImg" style="width: 100px;" /> <br />
    This application is written in Angular 6
</div>
<br />

<div>
    <b> LIKES: {{ count }}</b> <br />
    <button class="button-state" style="cursor:pointer" (click)="increment()">LOCAL STATE</button>&nbsp;&nbsp;👍 <br />
    <button class="button-state" style="cursor:pointer" (click)="decrement()">LOCAL STATE</button>&nbsp;&nbsp;👎 <br />
    <button class="button-state" style="cursor:pointer" (click)="globalIncrement()">GLOBAL STATE</button>&nbsp;&nbsp;👍 <br />
    <button class="button-state" style="cursor:pointer" (click)="globalDecrement()">GLOBAL STATE</button>&nbsp;&nbsp;👎 <br />
</div>

<br />
<a [routerLink]="['/subroute1']" routerLinkActive="active">Angular route 1</a>&nbsp;
<a [routerLink]="['/subroute2']" routerLinkActive="active">Angular route 2</a>&nbsp;
<a href="#/appngrx/movies">NGRX movies</a>&nbsp;
<a href="#/appngrx/covers">NGRX covers</a>&nbsp;
<a href="#/app4">Vue</a>&nbsp;

<router-outlet></router-outlet>    `,
})
export class App2 {
    count: number;
    angularImg: any;
    subscription;

    constructor(
        @Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
        @Inject(forwardRef(() => CounterActions)) private actions: CounterActions,
        @Inject(forwardRef(() => Globals)) private globals: Globals) {
        this.subscription = ngRedux.select<number>('count')
            .subscribe(newCount => this.count = newCount);
        this.angularImg = angularImg;
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    increment() {
        this.ngRedux.dispatch(this.actions.increment());
    }

    decrement() {
        this.ngRedux.dispatch(this.actions.decrement());
    }

    globalIncrement() {
        this.globals.globalEventDistributor.dispatch(this.actions.increment());
    }

    globalDecrement() {
        this.globals.globalEventDistributor.dispatch(this.actions.decrement());
    }
}
