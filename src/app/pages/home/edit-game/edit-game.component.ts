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
  selector: 'app-edit-game',
  templateUrl: './edit-game.component.html',
  styleUrls: ['./edit-game.component.scss']
})

export class EditGameComponent implements OnInit, OnDestroy {

  editGameForm = new FormGroup({});
  genres: string[] = genres;
  onDestroy$ = new Subject();

  @Output() newGameEmitter = new EventEmitter<Game>();

  constructor(
    private dialogRef: MatDialogRef<EditGameComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: any
  ) {
  }

  ngOnInit(): void {
    this.editGameForm = new FormGroup({
      id: new FormControl(this.data.id),
      name: new FormControl(this.data.name, [Validators.required]),
      genre: new FormControl(this.data.genre, [Validators.required]),
      rating: new FormControl(this.data.rating, [Validators.required, Validators.min(1), Validators.max(10)]),
      imgPath: new FormControl(this.data.imgPath, [Validators.required]),
      description: new FormControl(this.data.description, [Validators.required, Validators.max(250)])
    });
    this.editGameForm.valueChanges.pipe(
      debounceTime(100),
      tap(() => this.data = this.transformGameData(this.editGameForm.value)),
      takeUntil(this.onDestroy$)
    ).subscribe();
  }

  transformGameData(gameValues): Game {
    return {...this.data, ...gameValues};
  }

  saveGameChanges(): void {
    this.dialogRef.close({ data: this.data });
    this.editGameForm.reset('');
  }

  ngOnDestroy(): void {
    this.onDestroy$.unsubscribe();
  }

}
