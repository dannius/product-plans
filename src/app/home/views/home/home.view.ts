import { Component, OnInit } from '@angular/core';
import { state, trigger, style, transition, animate } from '@angular/animations';

declare var particlesJS: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.view.html',
  styleUrls: ['./home.view.scss'],
  animations: [
    trigger('simpleFadeAnimation', [
      state('in', style({ opacity: 1, transform: 'translateY(0)'})),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-30px)' }),
        animate(300)
      ]),
    ])
  ]
})
export class HomeView implements OnInit {

  constructor() { }

  ngOnInit() {
    particlesJS.load('particles-js', 'assets/particles.json', null);
  }

}
