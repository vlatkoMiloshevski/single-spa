
import { ɵAnimationEngine as AnimationEngine } from '@angular/animations/browser';
import { enableProdMode, NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { Router } from '@angular/router';
import singleSpaAngular from 'single-spa-angular';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { SingleSpaProps, singleSpaPropsSubject } from './single-spa/single-spa-props';
import './store';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: (singleSpaProps: SingleSpaProps) => {
    singleSpaPropsSubject.next(singleSpaProps.singleSpa);
    return platformBrowserDynamic([
      { provide: 'localStoreRef', useValue: singleSpaProps.store },
      { provide: 'globalEventDispatcherRef', useValue: singleSpaProps.globalEventDistributor }]).bootstrapModule(AppModule);
  },
  template: '<appngrx-root></appngrx-root>',
  Router,
  NgZone: NgZone,
  AnimationEngine: AnimationEngine,
});

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
