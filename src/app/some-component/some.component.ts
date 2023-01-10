import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AsyncPipe, JsonPipe} from "@angular/common";
import {pluck} from "rxjs";

@Component({
  selector: 'app-some-component',
  templateUrl: './some.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    JsonPipe
  ]
})
export class SomeComponent {

  route = this.activatedRoute.data
    .pipe(pluck('data', 'route', 'url'));

  state = this.activatedRoute.data
    .pipe(pluck('data', 'state', 'url'));

  constructor(private activatedRoute: ActivatedRoute) {
  }

}
