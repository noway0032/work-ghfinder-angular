import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBarExtendedComponent } from './search-bar-extended.component';

describe('SearchBarExtendedComponent', () => {
  let component: SearchBarExtendedComponent;
  let fixture: ComponentFixture<SearchBarExtendedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBarExtendedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBarExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
