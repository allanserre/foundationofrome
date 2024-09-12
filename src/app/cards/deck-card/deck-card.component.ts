import { Component, Input, OnChanges, OnInit, SimpleChanges, signal } from '@angular/core';

@Component({
  selector: 'app-deck-card',
  standalone: true,
  imports: [],
  templateUrl: './deck-card.component.html',
  styleUrl: './deck-card.component.scss'
})
export class DeckCardComponent implements OnChanges, OnInit {
  @Input() cardRow = 9;
  @Input() cardColumn = "f";

  scale = 0.2;
  cardCss = "";
  cardCssColumn = ""
  currentClass = signal("");

  constructor() {
    for (let column = 0; column < 10; column++) {


      for (let row = 0; row < 7; row++) {
        this.cardCss = this.cardCss + "." + String.fromCharCode(row + 65).toLocaleLowerCase() + (column + 1);
        this.cardCss = this.cardCss + " { background-position-x: -" + (column * 750 * this.scale) + "px; \n"
        this.cardCss = this.cardCss + " background-position-y: -" + (row * 1050 * this.scale) + "px; }"
      }
    }
    console.log(this.cardCss);
  }
  ngOnInit(): void {
    this.currentClass.set(this.cardColumn.toLocaleLowerCase() + this.cardRow);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes) {
      this.currentClass.set(changes['cardRow'].currentValue + changes['cardColumn'].currentValue);
    }
  }


}
