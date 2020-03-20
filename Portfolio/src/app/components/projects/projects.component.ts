import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => flipInY', animate(1000, keyframes(keyframe.flipInY))),
      transition('* => heartBeat', animate(1750, keyframes(keyframe.heartBeat))),
      transition('* => pulse', animate(1000, keyframes(keyframe.pulse)))
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  private animateFlip: string;
  private animationState: string;

  constructor() { }

  ngOnInit() {
    this.animateFlip = 'flipInY';
  }

  startAnimation(state: string){
    if(!this.animationState){
      this.animationState = state;
    }
  }

  resetAnimation(){
    this.animationState = "";
  }

}
