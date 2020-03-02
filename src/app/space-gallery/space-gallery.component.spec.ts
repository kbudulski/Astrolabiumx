import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceGalleryComponent } from './space-gallery.component';

describe('SpaceGalleryComponent', () => {
  let component: SpaceGalleryComponent;
  let fixture: ComponentFixture<SpaceGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
