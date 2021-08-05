import { Component, EventEmitter, Inject, OnDestroy, OnInit, Optional, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Game } from '../../../models/game';
import { debounceTime, takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

const genres = [
  'ACTION',
  'FPS',
  'RPG',
  'HORROR',
  'ADVENTURE'
];

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})

export class NewGameComponent implements OnInit, OnDestroy {

  newGameForm = new FormGroup({});
  genres: string[] = genres;
  onDestroy$ = new Subject();

  @Output() newGameEmitter = new EventEmitter<Game>();

  constructor(
    private dialogRef: MatDialogRef<NewGameComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.newGameForm = new FormGroup({
      id: new FormControl(Math.random()),
      name: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      rating: new FormControl('', [Validators.required, Validators.min(1), Validators.max(10)]),
      imgPath: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.max(250)])
    });
    this.newGameForm.valueChanges.pipe(
      debounceTime(100),
      tap(() => this.data.gameItem = this.transformGameData(this.newGameForm.value)),
      takeUntil(this.onDestroy$)
    ).subscribe();
  }

  transformGameData(gameValues): Game {
    return {...this.data.gameItem, ...gameValues};
  }

  createNewGame(): void {
    this.dialogRef.close({ data: this.data.gameItem });
    this.newGameForm.reset('');
  }

  ngOnDestroy(): void {
    this.onDestroy$.unsubscribe();
  }

}
