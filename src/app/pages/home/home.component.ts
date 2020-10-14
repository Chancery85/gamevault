import { Component, OnInit } from '@angular/core';
import { Game } from "../../models/game";
import { GameService } from "../../services/game.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  gameData: Game[] = [];
  loggedIn = false;

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.gameService.fetchGames().subscribe(data => {
      this.gameData = data;
    });
  }

}
