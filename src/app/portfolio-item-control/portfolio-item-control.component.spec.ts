import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioItemControlComponent } from './portfolio-item-control.component';

describe('PortfolioItemControlComponent', () => {
  let component: PortfolioItemControlComponent;
  let fixture: ComponentFixture<PortfolioItemControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioItemControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioItemControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
