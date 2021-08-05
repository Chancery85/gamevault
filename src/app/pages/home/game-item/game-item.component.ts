import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Game } from '../../../models/game';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.scss']
})
export class GameItemComponent implements OnInit {
  @Input() game: Game;
  @Output() removeGameEmitter = new EventEmitter<Game>();
  @Output() editGameEmitter = new EventEmitter<Game>();
  constructor() { }

  ngOnInit(): void {
  }

  addFavorite(): void {
    this.game.favorite = !this.game.favorite;
  }

  removeGame(): void {
    this.removeGameEmitter.emit();
  }

  editGame(): void {
    this.editGameEmitter.emit();
  }

}
