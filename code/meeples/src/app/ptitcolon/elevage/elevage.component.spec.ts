import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElevageComponent } from './elevage.component';

describe('ElevageComponent', () => {
  let component: ElevageComponent;
  let fixture: ComponentFixture<ElevageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElevageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElevageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
