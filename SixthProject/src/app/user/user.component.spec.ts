import { ComponentFixture, TestBed } from '@angular/core/testing';
import { expand } from 'rxjs';

import { UserComponent } from './user.component';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("check component name ", ()=>{
    expect(component.componentName).toBe("user")
  })
  
  it("check component function Sum ", ()=>{
    expect(component.sum(20,30)).toBe(50)
  })

  it("check component function Add ", ()=>{
    expect(component.add()).toBe(100)
  })
  
  it("check html Element ", ()=>{
    const collection=fixture.nativeElement
    expect(collection.querySelector('.user_component').textContent).toContain('user')
  })
});
