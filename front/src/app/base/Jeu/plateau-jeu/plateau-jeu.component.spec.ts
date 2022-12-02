import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlateauJeuComponent } from './plateau-jeu.component';

describe('PlateauJeuComponent', () => {
  let component: PlateauJeuComponent;
  let fixture: ComponentFixture<PlateauJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlateauJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlateauJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
