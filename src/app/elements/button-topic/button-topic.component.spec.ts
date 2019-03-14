import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTopicComponent } from './button-topic.component';

describe('ButtonTopicComponent', () => {
  let component: ButtonTopicComponent;
  let fixture: ComponentFixture<ButtonTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
