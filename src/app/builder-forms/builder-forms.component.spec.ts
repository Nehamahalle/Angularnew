import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderFormsComponent } from './builder-forms.component';

describe('BuilderFormsComponent', () => {
  let component: BuilderFormsComponent;
  let fixture: ComponentFixture<BuilderFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuilderFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
