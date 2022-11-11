import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbbBookComponent } from './abb-book.component';

describe('AbbBookComponent', () => {
  let component: AbbBookComponent;
  let fixture: ComponentFixture<AbbBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AbbBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbbBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
