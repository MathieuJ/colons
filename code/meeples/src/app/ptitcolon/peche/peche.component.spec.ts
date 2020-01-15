import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PecheComponent } from './peche.component';

describe('PecheComponent', () => {
  let component: PecheComponent;
  let fixture: ComponentFixture<PecheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PecheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PecheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
