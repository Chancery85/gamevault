import { Component, OnDestroy, OnInit } from '@angular/core';
import { Game } from '../../models/game';
import { GameService } from '../../services/game.service';
import { debounceTime, distinctUntilChanged, takeUntil, tap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewGameComponent } from './new-game/new-game.component';
import { EditGameComponent } from './edit-game/edit-game.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  gameData: Game[] = [];
  filteredGameData: Game[] = [];
  filter: FormControl;
  onDestroy$ = new Subject();
  loggedIn = false;

  constructor(
    private gameService: GameService,
    private dialog: MatDialog,
  ) {
    this.gameService.fetchGames().pipe(
      tap(data => {
        this.gameData = data;
        this.filteredGameData = [...this.gameData];
      })
    ).subscribe();
  }

  filterData(input: string): Game[] {
    return this.filteredGameData = this.gameData.filter(item => item.name.toLowerCase().indexOf(input) !== -1);
  }

  ngOnInit(): void {
    this.filter = new FormControl('');
    this.filter.valueChanges.pipe(
      debounceTime(100),
      distinctUntilChanged(),
      tap((input) => this.filterData(input)),
      takeUntil(this.onDestroy$),
    ).subscribe();
  }

  openAddGame(): void {
    this.dialog.open(NewGameComponent, {
      width: '700px',
      backdropClass: 'custom-dialog-backdrop-class',
      data: {gameItem: {}}
    }).afterClosed().pipe(
      tap(newGameData => {
        if (!newGameData) {
          return;
        }
        this.filteredGameData = [newGameData.data].concat(this.filteredGameData);
      })
    ).subscribe();
  }

  openEditGame(index: number): void {
    const matchGame: Game = this.filteredGameData.find(game => this.filteredGameData.indexOf(game) === index);
    this.dialog.open(EditGameComponent, {
      width: '700px',
      backdropClass: 'custom-dialog-backdrop-class',
      data: matchGame
    }).afterClosed().pipe(tap(editedGameData => {
      if (!editedGameData) {
        return;
      }
      this.filteredGameData[index] = editedGameData.data;
    })).subscribe();
  }

  removeGame(index): Game[] {
    return this.filteredGameData.splice(index, 1);
  }

  ngOnDestroy(): void {
    this.onDestroy$.unsubscribe();
  }

}
