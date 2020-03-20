import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => flipInY', animate(1000, keyframes(keyframe.flipInY)))
    ])
  ]
})
export class SkillComponent implements OnInit {

  public chartType: string = 'doughnut';
  private animateFlip: string;

  //skillmatrix data sets
  public chartDatasets1: Array<any> = [
    { data: [120, 120, 120, 120, 120], label: 'Web Technologies' }
  ];

  public chartDatasets2: Array<any> = [
    { data: [180, 180, 180, 120, 90], label: 'Core Framework' }
  ];

  public chartDatasets3: Array<any> = [
    { data: [120, 120, 120, 120, 120], label: 'Server-Side' }
  ];

  public chartDatasets4: Array<any> = [
    { data: [120, 120, 90, 90, 120], label: 'Testing Tools' }
  ];

  public chartDatasets5: Array<any> = [
    { data: [540, 120, 120, 120, 120], label: 'Languages' }
  ];

  public chartDatasets6: Array<any> = [
    { data: [90, 90, 90, 180, 90], label: 'DevOps' }
  ];

  public chartDatasets7: Array<any> = [
    { data: [90, 90, 90, 90, 90], label: 'Web & Micro Services' }
  ];

  //labels
  public chartLabels1: Array<any> = ['Angular', 'HTML', 'CSS', 'JavaScript', 'AJAX'];
  public chartLabels2: Array<any> = ['Spring MVC', 'Spring ORM', 'Spring Cloud', 'Servlet', 'Hibernate'];
  public chartLabels3: Array<any> = ['Apache Tomcat', 'NodeJS', 'JDBC', 'Oracle SQL', 'JSON'];
  public chartLabels4: Array<any> = ['JUnit', 'Postman', 'Jasmine', 'Karma', 'Mockito'];
  public chartLabels5: Array<any> = ['Java', 'HTML', 'JavaScript', 'TypeScript', 'XML'];
  public chartLabels6: Array<any> = ['Jenkins', 'AWS EC2', 'AWS S3', 'Maven', 'Docker'];
  public chartLabels7: Array<any> = ['Netflix Eureka', 'Netflix Hystrix', 'Netflix Zuul', 'REST', 'SOAP'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  constructor() { }

  ngOnInit() {
    this.animateFlip = 'flipInY';
  }

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
}
