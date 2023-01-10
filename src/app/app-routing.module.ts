import {NgModule} from '@angular/core';
import {ExtraOptions, RouterModule, Routes} from '@angular/router';
import {SomeResolver} from "./some-resolver/some.resolver";

const routes: Routes = [
  {
    path: '**',
    loadComponent: () => import('./some-component/some.component').then(m => m.SomeComponent),
    resolve: {
      data: SomeResolver
    }
  }
];

const options: ExtraOptions = {
  initialNavigation: 'enabledBlocking'
}

@NgModule({
  imports: [RouterModule.forRoot(routes, options)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
