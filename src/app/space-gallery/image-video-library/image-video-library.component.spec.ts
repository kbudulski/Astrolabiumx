import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageVideoLibraryComponent } from './image-video-library.component';

describe('ImageVideoLibraryComponent', () => {
  let component: ImageVideoLibraryComponent;
  let fixture: ComponentFixture<ImageVideoLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageVideoLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageVideoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
