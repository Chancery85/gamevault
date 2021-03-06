import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { AuthService } from './auth.service';
import { exhaustMap, map, take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameService {
  constructor(private http: HttpClient, private authService: AuthService) {
  }
  public fetchGames(): Observable<Game[]> {
    return this.authService.user.pipe(
      take(1),
      exhaustMap(user => {
        return this.http.get<Game[]>('https://game-vault-12d79.firebaseio.com/games.json');
      }),
      map(games => {
        return games.map(game => {
          return {
            ...game
          };
        });
      })
    );
  }

  storeGames(): void {
    const gameList = this.fetchGames();
    this.http.put('https://game-vault-12d79.firebaseio.com/games.json', gameList).subscribe();
  }

}
