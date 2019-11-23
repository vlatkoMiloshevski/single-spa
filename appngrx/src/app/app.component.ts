import { NgRedux } from '@angular-redux/store';
import { Component, forwardRef, Inject, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterActions, IAppState } from '../store';
import { Globals } from './globals.service';
import { load } from './state/movie.actions';
import { StateModel } from './state/state.model';

@Component({
  selector: 'appngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {
  angularImg: any;
  subscription: any;
  count: number;

  constructor(
    private store: Store<StateModel>,
    @Inject(forwardRef(() => NgRedux)) private ngRedux: NgRedux<IAppState>,
    @Inject(forwardRef(() => CounterActions)) private actions: CounterActions,
    @Inject(forwardRef(() => Globals)) private globals: Globals
  ) {
    this.subscription = ngRedux.select<number>('count')
      .subscribe(newCount => this.count = newCount);
    this.store.dispatch(load());
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
