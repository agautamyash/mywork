// Preloading example from https://angular.io/docs/ts/latest/guide/router.html#!#custom-preloading

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
@Injectable()
export class PreloadModulesStrategy implements PreloadingStrategy {

  constructor() {}

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    if (route.data && route.data['preload']) {
      console.log('Preloaded: ' + route.path);
      return load();
    } else {
      return of(null);
    }
  }

}
