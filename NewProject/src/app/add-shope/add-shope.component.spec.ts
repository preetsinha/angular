import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShopeComponent } from './add-shope.component';

describe('AddShopeComponent', () => {
  let component: AddShopeComponent;
  let fixture: ComponentFixture<AddShopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
