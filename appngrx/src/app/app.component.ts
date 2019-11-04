import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { load } from './state/movie.actions';
import { StateModel } from './state/state.model';

@Component({
  selector: 'appngrx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private store: Store<StateModel>,
  ) {
    this.store.dispatch(load());
  }
}
