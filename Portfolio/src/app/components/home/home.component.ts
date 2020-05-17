import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => slideDown', animate(500, keyframes(keyframe.slideInDown)))
    ])
  ]
})
export class HomeComponent implements OnInit {

  private slideDown: string;
  
  constructor() { }

  ngOnInit() {
    this.slideDown='slideDown';
  }

}
