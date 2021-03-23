import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFictionComponent } from './update-fiction.component';

describe('UpdateFictionComponent', () => {
  let component: UpdateFictionComponent;
  let fixture: ComponentFixture<UpdateFictionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFictionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
