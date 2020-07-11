import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestBedProvider } from './specs/testbed-provider';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    fixture = provider.fixtureBuilder(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component.contactAnimate("start")).toBeUndefined();
    expect(component.linkedinAnimate("start")).toBeUndefined();

    expect(component).toBeTruthy();
  });
  
});
