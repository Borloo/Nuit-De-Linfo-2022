import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarreAchatComponent } from './barre-achat.component';

describe('BarreAchatComponent', () => {
  let component: BarreAchatComponent;
  let fixture: ComponentFixture<BarreAchatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarreAchatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarreAchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
