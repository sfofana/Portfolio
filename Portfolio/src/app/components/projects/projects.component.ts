import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'
import { AnimationService } from '../../services/animation.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => flipInY', animate(1000, keyframes(keyframe.flipInY))),
      transition('* => heartBeat', animate(1750, keyframes(keyframe.heartBeat))),
      transition('* => pulse', animate(1000, keyframes(keyframe.pulse))),
      transition('* => left', animate(300, keyframes(keyframe.fadeInLeft)))
    ])
  ]
})
export class ProjectsComponent implements OnInit {

  // Cards
  private bankCard: string;
  private newsCard: string;
  private healthCard: string;
  private freddieCard: string;
  private axionCard: string;
  private jaggedCard: string;
  private rekCard: string;
  // Buttons
  private bankLnch: string;
  private newsLnch: string;
  private healthLnch: string;
  private freddieLnch: string;
  private axionLnch: string;
  private jaggedLnch: string;
  private rekLnch: string;

  constructor(private animation: AnimationService) { }

  ngOnInit() {
    this.bankCard ="left";
    this.newsCard ="left";
    this.healthCard ="left";
    this.freddieCard ="left";
    this.axionCard ="left";
    this.jaggedCard ="left";
    this.rekCard = "left";
  }

  bankCardAnimate(state: string){
    this.bankCard = this.animation.cardAnimate(state);
  }

  newsCardAnimate(state: string){
    this.newsCard = this.animation.cardAnimate(state);
  }

  healthCardAnimate(state: string){
    this.healthCard = this.animation.cardAnimate(state);
  }

  freddieCardAnimate(state: string){
    this.freddieCard = this.animation.cardAnimate(state);
  }

  axionCardAnimate(state: string){
    this.axionCard = this.animation.cardAnimate(state);
  }

  jaggedCardAnimate(state: string){
    this.jaggedCard = this.animation.cardAnimate(state);
  }

  rekCardAnimate(state: string){
    this.rekCard = this.animation.cardAnimate(state);
  }

  bankLnchAnimate(state: string){
    this.bankLnch = this.animation.luanchBtnAnimate(state);
  }

  newsLnchAnimate(state: string){
    this.newsLnch = this.animation.luanchBtnAnimate(state);
  }

  healthLnchAnimate(state: string){
    this.healthLnch = this.animation.luanchBtnAnimate(state);
  }

  freddieLnchAnimate(state: string){
    this.freddieLnch = this.animation.luanchBtnAnimate(state);
  }

  axionLnchAnimate(state: string){
    this.axionLnch = this.animation.luanchBtnAnimate(state);
  }

  jaggedLnchAnimate(state: string){
    this.jaggedLnch = this.animation.luanchBtnAnimate(state);
  }

  rekLnchAnimate(state: string){
    this.rekLnch = this.animation.luanchBtnAnimate(state);
  }

}
