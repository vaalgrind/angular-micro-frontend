import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElbuttonComponent } from './elbutton.component';

describe('ElbuttonComponent', () => {
  let component: ElbuttonComponent;
  let fixture: ComponentFixture<ElbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
