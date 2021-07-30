import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameItemComponent } from './game-item.component';
import { NO_ERRORS_SCHEMA } from "@angular/core";

describe('GameItemComponent', () => {
  let component: GameItemComponent;
  let fixture: ComponentFixture<GameItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameItemComponent);
    component = fixture.componentInstance;
    component.game = {description: "", genre: "", id: 0, imgPath: "", name: "", rating: 0};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
