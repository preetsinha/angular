import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListShopeComponent } from './list-shope.component';

describe('ListShopeComponent', () => {
  let component: ListShopeComponent;
  let fixture: ComponentFixture<ListShopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListShopeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListShopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
