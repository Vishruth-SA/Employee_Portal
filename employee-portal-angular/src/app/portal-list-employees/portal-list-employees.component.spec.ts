import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortalListEmployeesComponent } from './portal-list-employees.component';

describe('PortalListEmployeesComponent', () => {
  let component: PortalListEmployeesComponent;
  let fixture: ComponentFixture<PortalListEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortalListEmployeesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortalListEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
