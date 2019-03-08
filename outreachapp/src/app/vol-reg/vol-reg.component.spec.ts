import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolRegComponent } from './vol-reg.component';

describe('VolRegComponent', () => {
  let component: VolRegComponent;
  let fixture: ComponentFixture<VolRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
