import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsComponent } from './projects.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    fixture = provider.fixtureBuilder(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.axionCardAnimate("start")).toBeUndefined();
    expect(component.bankCardAnimate("stop")).toBeUndefined();
    expect(component.freddieCardAnimate("start")).toBeUndefined();
    expect(component.healthCardAnimate("start")).toBeUndefined();
    expect(component.jaggedCardAnimate("start")).toBeUndefined();
    expect(component.newsCardAnimate("start")).toBeUndefined();
    expect(component.rekCardAnimate("start")).toBeUndefined();
    expect(component.tryAnimate("heartBeat")).toBeUndefined();
    expect(component.tryAnimate("pulse")).toBeUndefined();
    expect(component.tryAnimate("stop")).toBeUndefined();

    expect(component).toBeTruthy();
  });
});
