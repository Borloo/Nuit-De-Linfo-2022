import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreActionComponent } from './barre-action.component';

describe('BarreActionComponent', () => {
  let component: BarreActionComponent;
  let fixture: ComponentFixture<BarreActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreActionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
