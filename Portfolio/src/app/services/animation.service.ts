import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnimationService {

  constructor() { }

  public dashAnimate(state: string) : string {
    if(state == "start"){
      return "pulse";
    }
    if(state == "stop"){
      return "";
    }
  }
  
  public btnAnimate(state: string) : string {
    if(state == "start"){
      return "pulse";
    }
    if(state == "stop"){
      return "";
    }
  }

  public linkAnimate(state: string) : string {
    if(state == "start"){
      return "up";
    }
    if(state == "stop"){
      return "";
    }
  }

  public actionBtnAnimate(state: string) : string {
    if(state == "heartBeat"){
      return "heartBeat";
    }
    if(state == "pulse"){
      return "pulse";
    }
    if(state == "stop"){
      return "";
    }
  }

  public cardAnimate(state: string) : string {
    if(state == "start"){
      return "flipInY";
    }
    if(state == "stop"){
      return "";
    }
  }
}
