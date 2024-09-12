import {Component, Input} from '@angular/core';
import {Card} from "../../models/Card";
import {DeckCardComponent} from "../../cards/deck-card/deck-card.component";

@Component({
  selector: 'app-deed',
  standalone: true,
  imports: [
    DeckCardComponent
  ],
  templateUrl: './deed.component.html',
  styleUrl: './deed.component.scss'
})
export class DeedComponent {
  @Input() riverCards : Card[] = [
    {
      row : 1,
      col : "a"
    },
    {
      row : 4,
      col : "c"
    },
    {
      row : 8,
      col : "f"
    },
    {
      row : 3,
      col : "a"
    },
    {
      row : 2,
      col : "a"
    },
    {
      row : 7,
      col : "b"
    },
  ];
}
