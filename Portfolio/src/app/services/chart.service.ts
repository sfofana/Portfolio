import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  constructor() { }

  public chartType: string = 'doughnut';

  //skillmatrix data sets
  public webData: Array<any> = [
    { data: [120, 120, 120, 120, 120], label: 'Web Technologies' }
  ];

  public coreData: Array<any> = [
    { data: [180, 180, 180, 120, 90], label: 'Core Framework' }
  ];

  public serverData: Array<any> = [
    { data: [120, 120, 120, 120, 120], label: 'Server-Side' }
  ];

  public testData: Array<any> = [
    { data: [120, 120, 90, 90, 120], label: 'Testing Tools' }
  ];

  public langData: Array<any> = [
    { data: [540, 120, 120, 120, 120], label: 'Languages' }
  ];

  public devData: Array<any> = [
    { data: [90, 90, 90, 180, 90], label: 'DevOps' }
  ];

  public servicesData: Array<any> = [
    { data: [90, 90, 90, 90, 90], label: 'Web & Micro Services' }
  ];

  //labels
  public webLabel: Array<any> = ['Angular', 'HTML', 'CSS', 'JavaScript', 'AJAX'];
  public coreLabel: Array<any> = ['Spring MVC', 'Spring ORM', 'Spring Cloud', 'Servlet', 'Hibernate'];
  public serverLabel: Array<any> = ['Apache Tomcat', 'NodeJS', 'JDBC', 'Oracle SQL', 'JSON'];
  public testLabel: Array<any> = ['JUnit', 'Postman', 'Jasmine', 'Karma', 'Mockito'];
  public langLabel: Array<any> = ['Java', 'HTML', 'JavaScript', 'TypeScript', 'XML'];
  public devLabel: Array<any> = ['Jenkins', 'AWS EC2', 'AWS S3', 'Maven', 'Docker'];
  public servicesLabel: Array<any> = ['Netflix Eureka', 'Netflix Hystrix', 'Netflix Zuul', 'REST', 'SOAP'];

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

}
