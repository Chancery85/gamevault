import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Subscription } from "rxjs";
import { GameService } from "../../services/game.service";
import { tap } from "rxjs/operators";
import { Route } from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  loggedIn = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private gameService: GameService,
  ) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.loggedIn = !!user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  logout(){

  }

  fetchGames() {
    return this.gameService.fetchGames().pipe(
      tap(data => console.log(data))
    ).subscribe();
  }

}
