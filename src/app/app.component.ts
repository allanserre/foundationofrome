import { DeckCardComponent } from './cards/deck-card/deck-card.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardListComponent} from "./cards/card-list/card-list.component";
import {DeedComponent} from "./board/deed/deed.component";
import {PlayerComponent} from "./board/player/player.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeckCardComponent, CardListComponent, DeedComponent, PlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'foundationOfRome';
}
