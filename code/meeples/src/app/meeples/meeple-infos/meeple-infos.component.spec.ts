import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeepleInfosComponent } from './meeple-infos.component';

describe('MeepleInfosComponent', () => {
  let component: MeepleInfosComponent;
  let fixture: ComponentFixture<MeepleInfosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeepleInfosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeepleInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
