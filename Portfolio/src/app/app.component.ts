import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from './animations/animation'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => fadeInRight', animate(1100, keyframes(keyframe.fadeInRight))),
      transition('* => fadeInLeft', animate(1100, keyframes(keyframe.fadeInLeft))),
      transition('* => fadeInRight2', animate(1200, keyframes(keyframe.fadeInRight))),
      transition('* => fadeInLeft2', animate(1200, keyframes(keyframe.fadeInLeft))),
      transition('* => zoomIn', animate(1000, keyframes(keyframe.zoomIn)))
    ])
  ]
})
export class AppComponent implements OnInit {
  
  private animateLeft: string;
  private animateRight: string;
  private animateLeft2: string;
  private animateRight2: string;
  private animateZoom: string;

  ngOnInit(): void {
      this.animateRight = 'fadeInRight';
      this.animateLeft = 'fadeInLeft';
      this.animateRight2 = 'fadeInRight2';
      this.animateLeft2 = 'fadeInLeft2';
      this.animateZoom = 'zoomIn';
    }
}
