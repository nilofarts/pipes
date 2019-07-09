import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoPureImpureComponent } from './demo-pure-impure.component';

describe('DemoPureImpureComponent', () => {
  let component: DemoPureImpureComponent;
  let fixture: ComponentFixture<DemoPureImpureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoPureImpureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoPureImpureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
