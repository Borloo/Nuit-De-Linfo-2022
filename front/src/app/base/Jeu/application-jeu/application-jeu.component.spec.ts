import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationJeuComponent } from './application-jeu.component';

describe('ApplicationJeuComponent', () => {
  let component: ApplicationJeuComponent;
  let fixture: ComponentFixture<ApplicationJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
