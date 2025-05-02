import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreakDisplayComponent } from './streak-display.component';

describe('StreakDisplayComponent', () => {
  let component: StreakDisplayComponent;
  let fixture: ComponentFixture<StreakDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreakDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreakDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
