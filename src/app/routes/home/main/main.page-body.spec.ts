import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageBody } from './main.page-body';

describe('MainPageBody', () => {
  let component: MainPageBody;
  let fixture: ComponentFixture<MainPageBody>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainPageBody]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainPageBody);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
