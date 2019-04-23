import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherServicePage } from './weather-service.page';

describe('WeatherServicePage', () => {
  let component: WeatherServicePage;
  let fixture: ComponentFixture<WeatherServicePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherServicePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherServicePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
