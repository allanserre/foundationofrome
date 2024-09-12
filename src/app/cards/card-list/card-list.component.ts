import { Component } from '@angular/core';
import {DeckCardComponent} from "../deck-card/deck-card.component";
import {Card} from "../../models/Card";


@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    DeckCardComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss'
})
export class CardListComponent {
  cardList : Card[] = []

  constructor() {
    for (let j = 0; j < 7; j++) {
    for (let i = 0; i < 10; i++) {

        this.cardList.push({
          row : i + 1,
          col : String.fromCharCode(j+65).toLocaleLowerCase()
        })
      }
    }
  }
}
