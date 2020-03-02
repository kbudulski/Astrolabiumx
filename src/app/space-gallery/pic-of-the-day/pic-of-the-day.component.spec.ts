import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicOfTheDayComponent } from './pic-of-the-day.component';

describe('PicOfTheDayComponent', () => {
  let component: PicOfTheDayComponent;
  let fixture: ComponentFixture<PicOfTheDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicOfTheDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
