import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeComponent } from './free.component';
import { TestBedProvider } from 'src/app/specs/testbed-provider';

describe('FreeComponent', () => {
  let component: FreeComponent;
  let fixture: ComponentFixture<FreeComponent>;

  beforeEach(() => {
    const provider: TestBedProvider = new TestBedProvider()
    fixture = provider.fixtureBuilder(FreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
