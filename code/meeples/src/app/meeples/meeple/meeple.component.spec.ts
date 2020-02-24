import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeepleComponent } from './meeple.component';

describe('MeepleComponent', () => {
  let component: MeepleComponent;
  let fixture: ComponentFixture<MeepleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeepleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeepleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
