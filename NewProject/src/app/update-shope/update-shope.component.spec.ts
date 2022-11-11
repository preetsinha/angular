import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateShopeComponent } from './update-shope.component';

describe('UpdateShopeComponent', () => {
  let component: UpdateShopeComponent;
  let fixture: ComponentFixture<UpdateShopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateShopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
