import { Component, OnInit } from '@angular/core';
import { trigger, transition, keyframes, animate } from '@angular/animations';
import * as keyframe from '../../animations/animation'

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss'],
  animations: [
    trigger('animator', [
      transition('* => leadRight', animate(500, keyframes(keyframe.fadeInRight))),
      transition('* => followRight', animate(600, keyframes(keyframe.fadeInRight)))
    ])
  ]
})
export class WorkComponent implements OnInit {

  private leadRight: string;
  private followRight: string;

  constructor() { }

  ngOnInit() {
    this.leadRight='leadRight';
    this.followRight='followRight';
  }

}
