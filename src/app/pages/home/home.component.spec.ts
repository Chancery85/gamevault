import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

const gameData = [
  {
    "description": "Genshin Impact is a free-to-play action role-playing game developed and published by miHoYo, who are known for Honkai Impact 3rd, a popular action game. The game features a fantasy-based open world with rpg game mechanics.",
    "favorite": true,
    "genre": "RPG",
    "id": 1,
    "imgPath": "https://img.republicworld.com/republic-prod/stories/promolarge/xxhdpi/eqxnk5a1pu5xtttb_1601550525.jpeg?tr=w-812,h-464",
    "name": "Genshin Impact",
    "rating": 8.5
  }, {
    "description": "Ghost of Tsushima is an action-adventure game developed by Sucker Punch and published by Sony Interactive Entertainment for PlayStation 4. Featuring an open world, it follows a samurai on a quest to protect Tsushima.",
    "favorite": false,
    "genre": "ACTION",
    "id": 2,
    "imgPath": "https://blog.playstation.com/tachyon/2020/07/ghost-ost-featured.jpg",
    "name": "Ghost of Tsushima",
    "rating": 8.3
  }, {
    "description": "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment for the PlayStation 4.",
    "favorite": true,
    "genre": "ACTION",
    "id": 3,
    "imgPath": "https://s3.us-east-1.amazonaws.com/nd.images/uploads/d20161201_03_Reveal_Trailer_Thumbs_01.jpg",
    "name": "The Last of US Part II",
    "rating": 9.3
  }, {
    "description": "Fortnite is an online video game developed by Epic Games and released in 2017. It is available in three distinct game mode versions that otherwise share the same general gameplay and game engine.",
    "favorite": false,
    "genre": "FPS",
    "id": 4,
    "imgPath": "https://image-cdn.essentiallysports.com/wp-content/uploads/20200617190129/fortnite-season-3-battle-pass-skins-1600x901.jpg",
    "name": "Fortnite",
    "rating": 9.6
  }, {
    "description": "Cyberpunk 2077 is an upcoming action role-playing video game developed and published by CD Projekt. It is scheduled to be released for Microsoft Windows, PlayStation 4, PlayStation 5, Stadia, Xbox One, and Xbox Series X/S on 19 November 2020.",
    "favorite": false,
    "genre": "RPG",
    "id": 5,
    "imgPath": "https://c.files.bbci.co.uk/185CD/production/_114698799_cyberpunk2077_5ecfe92351d704_86615862-png-1024x576.png",
    "name": "Cyberpunk 2077",
    "rating": 10
  }
]

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ],
      imports:[HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should search matches', () => {
    component.gameData = gameData;
    console.log(component.filteredGameData);
    component.filter.patchValue('Ghost');
    fixture.detectChanges();
    expect(component.filteredGameData.length).toEqual(1);
  });
});
