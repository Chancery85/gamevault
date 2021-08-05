import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-game',
  templateUrl: './new-game.component.html',
  styleUrls: ['./new-game.component.scss']
})
export class NewGameComponent implements OnInit {

  newGameForm = new FormGroup({});

  constructor() { }

  ngOnInit(): void {
    this.newGameForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      genre: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    });
  }

}
