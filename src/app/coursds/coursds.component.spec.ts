import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursdsComponent } from './coursds.component';

describe('CoursdsComponent', () => {
  let component: CoursdsComponent;
  let fixture: ComponentFixture<CoursdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
