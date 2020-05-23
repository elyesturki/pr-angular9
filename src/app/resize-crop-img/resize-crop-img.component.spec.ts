import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResizeCropImgComponent } from './resize-crop-img.component';

describe('ResizeCropImgComponent', () => {
  let component: ResizeCropImgComponent;
  let fixture: ComponentFixture<ResizeCropImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResizeCropImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResizeCropImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
