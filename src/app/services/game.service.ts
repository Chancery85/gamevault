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
    return this.http.get<Game[]>('../assets/data/games.json');
  }
}
