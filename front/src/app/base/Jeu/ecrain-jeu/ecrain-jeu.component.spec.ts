import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcrainJeuComponent } from './ecrain-jeu.component';

describe('EcrainJeuComponent', () => {
  let component: EcrainJeuComponent;
  let fixture: ComponentFixture<EcrainJeuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcrainJeuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcrainJeuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
