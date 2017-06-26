import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CseCoursesComponent } from './cse-courses.component';

describe('CseCoursesComponent', () => {
  let component: CseCoursesComponent;
  let fixture: ComponentFixture<CseCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CseCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CseCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
