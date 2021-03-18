import { Component, Input, OnInit } from '@angular/core';
import { Game } from "../../models/game";
import { GameService } from "../../services/game.service";
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() gameData: Game[] = [];
  loggedIn = false;

  constructor(private gameService: GameService) {
    this.gameService.fetchGames().pipe(
      tap(data => {
        this.gameData = data;
      })
    ).subscribe();
  }

  ngOnInit(): void {

  }

}
