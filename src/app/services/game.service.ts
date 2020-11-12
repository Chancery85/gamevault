import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Game } from "../models/game";

@Injectable({
  providedIn: 'root'
})

export class GameService {
  constructor(private http: HttpClient) {
  }
  public fetchGames() {
    return this.http.get<Game[]>('https://game-vault-12d79.firebaseio.com/games.json');
  }

  storeGames() {
    const gameList = this.fetchGames();
    this.http.put('https://game-vault-12d79.firebaseio.com/games.json', gameList).subscribe();
  }

}
