import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarsWeatherComponent } from './mars-weather.component';

describe('MarsWeatherComponent', () => {
  let component: MarsWeatherComponent;
  let fixture: ComponentFixture<MarsWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarsWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarsWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
