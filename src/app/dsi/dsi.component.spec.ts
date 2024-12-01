import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DsiComponent } from './dsi.component';

describe('DsiComponent', () => {
  let component: DsiComponent;
  let fixture: ComponentFixture<DsiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DsiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
