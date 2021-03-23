import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { NavBarComponent } from './nav-bar.component';
let routerStub;
describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ]
    })
    .compileComponents();
    providers: [
      { provide: Router, useValue: routerStub }
    ]
  });

  beforeEach(() => {
    routerStub = {
      navigate: jasmine.createSpy('navigate'),
    }
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('it should navigate to login after user logs out', () => {
    let component = TestBed.createComponent(NavBarComponent).componentInstance;
    component.logout();
  
    expect(routerStub.navigate).toHaveBeenCalledWith(['/login']);
  });
});
