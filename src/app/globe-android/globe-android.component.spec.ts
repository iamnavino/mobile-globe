import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeAndroidComponent } from './globe-android.component';

describe('GlobeAndroidComponent', () => {
  let component: GlobeAndroidComponent;
  let fixture: ComponentFixture<GlobeAndroidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobeAndroidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeAndroidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
