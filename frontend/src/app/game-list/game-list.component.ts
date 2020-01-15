import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {Game} from "../game";
import {GameService} from "../game.service";

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {
  games: Observable<Game[]>;
  wins: Observable<any>;

  constructor(private gameService: GameService) {
  }

  ngOnInit() {
    this.reloadData();


  }


  reloadData() {
    this.games = this.gameService.getGamesList();
  }


}
