import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesGroupTreeViewComponent } from './sales-group-tree-view.component';

describe('SalesGroupTreeViewComponent', () => {
  let component: SalesGroupTreeViewComponent;
  let fixture: ComponentFixture<SalesGroupTreeViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalesGroupTreeViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesGroupTreeViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
