import {Injectable} from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import {Observable, of} from 'rxjs';

interface SomeResolverData {
  route: ActivatedRouteSnapshot,
  state?: RouterStateSnapshot,
}

@Injectable({
  providedIn: 'root'
})
export class SomeResolver implements Resolve<SomeResolverData> {

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): SomeResolverData {
    return {
      route,
      state,
    };
  }

}
