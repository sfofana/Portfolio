import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => slideInUp', animate(500, keyframes(keyframe.slideInUp)))
    ])
  ]
})
export class HomeComponent implements OnInit {

  private animationState: string;
  
  constructor() { }

  ngOnInit() {
    this.animationState='slideInUp';
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
