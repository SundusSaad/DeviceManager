import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestDevicePageComponent } from './test-device-page.component';

describe('TestDevicePageComponent', () => {
  let component: TestDevicePageComponent;
  let fixture: ComponentFixture<TestDevicePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestDevicePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestDevicePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
