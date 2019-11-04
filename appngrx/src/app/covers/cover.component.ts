import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Cover } from '../models/cover-model';
import { Movie } from '../models/movie-model';
import { ErrorService } from '../services/error-handler.service';
import * as coverActions from '../state/cover.actions';
import * as fromCover from '../state/cover.selector';
import * as fromMovie from '../state/movie.selector';
import { StateModel } from '../state/state.model';

@Component({
  selector: 'appngrx-covers',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.css']
})
export class CoversComponent implements OnInit, OnChanges, OnDestroy {

  covers: Array<Cover> = [];
  checked: boolean;
  imageWidth: string;
  covers$: Observable<any>;
  moviesSub$: Subscription;
  imageWidthSub$: Subscription;

  constructor(
    private store: Store<StateModel>,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.moviesSub$ = this.store.pipe(select(fromMovie.getMovieListState)).subscribe(
      movies => this.drawCheckedMoviesCovers(movies),
      error => this.errorService.errorHandler(error),
    );

    this.imageWidthSub$ = this.store.pipe(select(fromCover.getShowLargeImages)).subscribe(
      showLargeImages => this.handleImagesSize(showLargeImages),
      error => this.errorService.errorHandler(error),
    );
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onCheckboxModelChange(showLargeImages) {
    this.store.dispatch(coverActions.handleToggleLargeImages({ showLargeImages: showLargeImages }));
  }

  drawCheckedMoviesCovers(movieList: Array<Movie>) {
    this.covers = movieList.filter(movie => movie.checked);
  }

  handleImagesSize(showLargeImages: boolean) {
    this.imageWidth = showLargeImages ? '200' : '150';
    this.checked = showLargeImages ? true : false;
  }

  ngOnDestroy() {
    this.moviesSub$.unsubscribe();
    this.imageWidthSub$.unsubscribe();
  }
}
