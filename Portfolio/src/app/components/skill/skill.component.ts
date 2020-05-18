import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'
import { AnimationService } from '../../services/animation.service';
import { ChartService } from '../../services/chart.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => flipInY', animate(1000, keyframes(keyframe.flipInY))),
      transition('* => inLeft', animate(300, keyframes(keyframe.fadeInLeft)))
    ])
  ]
})
export class SkillComponent implements OnInit {

  private chartType: string;
  private animateFlip: string;

  //skillmatrix data sets
  private webData: Array<any>;
  private coreData: Array<any>;
  private serverData: Array<any>;
  private testData: Array<any>;
  private langData: Array<any>;
  private devData: Array<any>;
  private servicesData: Array<any>;

  //labels
  private webLabel: Array<any>;
  private coreLabel: Array<any>;
  private serverLabel: Array<any>;
  private testLabel: Array<any>;
  private langLabel: Array<any>;
  private devLabel: Array<any>;
  private servicesLabel: Array<any>;

  private chartColors: Array<any>;

  // Animations
  private webCard: string;
  private coreCard: string;
  private serverCard: string;
  private testCard: string;
  private langCard: string;
  private devCard: string;
  private servicesCard: string;

  constructor(private animation: AnimationService, private data: ChartService) { }

  ngOnInit() {
    this.animateFlip = 'flipInY';
    this.chartType = this.data.chartType;
    this.webData = this.data.webData;
    this.coreData = this.data.coreData;
    this.serverData = this.data.serverData;
    this.testData = this.data.testData;
    this.langData = this.data.langData;
    this.devData = this.data.devData;
    this.servicesData = this.data.servicesData;
    this.webLabel = this.data.webLabel;
    this.coreLabel = this.data.coreLabel;
    this.serverLabel = this.data.serverLabel;
    this.testLabel = this.data.testLabel;
    this.langLabel = this.data.langLabel;
    this.devLabel = this.data.devLabel
    this.servicesLabel = this.data.servicesLabel;
    this.chartColors = this.data.chartColors;

    this.webCard = "inLeft";
    this.coreCard = "inLeft";
    this.serverCard = "inLeft";
    this.testCard = "inLeft";
    this.langCard = "inLeft";
    this.devCard = "inLeft";
    this.servicesCard = "inLeft";
  }

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  webCardAnimate(state: string){
    this.webCard = this.animation.cardAnimate(state);
  }

  coreCardAnimate(state: string){
    this.coreCard = this.animation.cardAnimate(state);
  }

  serverCardAnimate(state: string){
    this.serverCard = this.animation.cardAnimate(state);
  }

  testCardAnimate(state: string){
    this.testCard = this.animation.cardAnimate(state);
  }

  langCardAnimate(state: string){
    this.langCard = this.animation.cardAnimate(state);
  }

  devCardAnimate(state: string){
    this.devCard = this.animation.cardAnimate(state);
  }

  servicesCardAnimate(state: string){
    this.servicesCard = this.animation.cardAnimate(state);
  }
}
