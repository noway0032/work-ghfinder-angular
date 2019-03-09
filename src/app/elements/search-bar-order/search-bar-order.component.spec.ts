import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarOrderComponent } from './search-bar-order.component';

describe('SearchBarOrderComponent', () => {
  let component: SearchBarOrderComponent;
  let fixture: ComponentFixture<SearchBarOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
