import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-free',
  templateUrl: './free.component.html',
  styleUrls: ['./free.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => fadeInRight', animate(500, keyframes(keyframe.fadeInRight))),
      transition('* => fadeInRight2', animate(600, keyframes(keyframe.fadeInRight)))
    ])
  ]
})
export class FreeComponent implements OnInit {

  private animationState: string;
  private animationState2: string;

  constructor() { }

  ngOnInit() {
    this.animationState='fadeInRight';
    this.animationState2='fadeInRight2';
  }

}
