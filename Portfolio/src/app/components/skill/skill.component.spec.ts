import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillComponent } from './skill.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';

describe('SkillComponent', () => {
  let component: SkillComponent;
  let fixture: ComponentFixture<SkillComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    fixture = provider.fixtureBuilder(SkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.coreCardAnimate("stop")).toBeUndefined();
    expect(component.devCardAnimate("start")).toBeUndefined();
    expect(component.langCardAnimate("start")).toBeUndefined();
    expect(component.serverCardAnimate("start")).toBeUndefined();
    expect(component.servicesCardAnimate("start")).toBeUndefined();
    expect(component.testCardAnimate("start")).toBeUndefined();
    expect(component.webCardAnimate("start")).toBeUndefined();

    expect(component).toBeTruthy();
  });
});
