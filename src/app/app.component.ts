import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { LoaderService } from '@app/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(300)
      ]),
      transition(':leave', [
        animate(300, style({ opacity: 0 })),
      ]),
    ])
  ]
})
export class AppComponent {
  constructor (public loaderSvc: LoaderService) {}
}
