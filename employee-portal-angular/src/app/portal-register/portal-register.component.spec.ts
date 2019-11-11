import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalRegisterComponent } from './portal-register.component';

describe('PortalRegisterComponent', () => {
  let component: PortalRegisterComponent;
  let fixture: ComponentFixture<PortalRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
