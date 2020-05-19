import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from './animations/animation'
import { AnimationService } from './services/animation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => leadRight', animate(1100, keyframes(keyframe.fadeInRight))),
      transition('* => leadLeft', animate(1100, keyframes(keyframe.fadeInLeft))),
      transition('* => followRight', animate(1200, keyframes(keyframe.fadeInRight))),
      transition('* => followLeft', animate(1200, keyframes(keyframe.fadeInLeft))),
      transition('* => zoomIn', animate(1000, keyframes(keyframe.zoomIn))),
      transition('* => pulse', animate(500, keyframes(keyframe.pulse))),
      transition('* => up', animate(300, keyframes(keyframe.moveUp)))
    ])
  ]
})
export class AppComponent implements OnInit {
  
  // Dashboard
  private home: string;
  private work: string;
  private free: string;
  private project: string;
  private skill: string;
  private contact: string;

  // Main
  private leadLeft: string;
  private leadRight: string;
  private followLeft: string;
  private followRight: string;
  private zoomIn: string;

  // Link
  private linkedin: string;
  private git: string;
  private youtube: string;
  private email: string;

  constructor(private animation: AnimationService) {
    
  }

  ngOnInit(): void {
      this.leadRight = 'leadRight';
      this.leadLeft = 'leadLeft';
      this.followRight = 'followRight';
      this.followLeft = 'followLeft';
      this.zoomIn = 'zoomIn';
    }

    homeAnimate(state: string){
      this.home = this.animation.dashAnimate(state);
    }

    workAnimate(state: string){
      this.work = this.animation.dashAnimate(state);
    }

    freeAnimate(state: string){
      this.free = this.animation.dashAnimate(state);
    }

    projectAnimate(state: string){
      this.project = this.animation.dashAnimate(state);
    }

    skillAnimate(state: string){
      this.skill = this.animation.dashAnimate(state);
    }

    contactAnimate(state: string){
      this.contact = this.animation.dashAnimate(state);
    }

    linkedinAnimate(state: string){
      this.linkedin = this.animation.linkAnimate(state);
    }

    gitAnimate(state: string){
      this.git = this.animation.linkAnimate(state);
    }

    youtubeAnimate(state: string){
      this.youtube = this.animation.linkAnimate(state);
    }

    emailAnimate(state: string){
      this.email = this.animation.linkAnimate(state);
    }
}
