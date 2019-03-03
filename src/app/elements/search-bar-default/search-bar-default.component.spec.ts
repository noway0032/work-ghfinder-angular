import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarDefaultComponent } from './search-bar-default.component';

describe('SearchBarDefaultComponent', () => {
  let component: SearchBarDefaultComponent;
  let fixture: ComponentFixture<SearchBarDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarDefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
