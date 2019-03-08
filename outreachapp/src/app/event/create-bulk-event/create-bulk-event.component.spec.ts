import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBulkEventComponent } from './create-bulk-event.component';

describe('CreateBulkEventComponent', () => {
  let component: CreateBulkEventComponent;
  let fixture: ComponentFixture<CreateBulkEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateBulkEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBulkEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
