import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeedComponent } from './deed.component';

describe('DeedComponent', () => {
  let component: DeedComponent;
  let fixture: ComponentFixture<DeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
