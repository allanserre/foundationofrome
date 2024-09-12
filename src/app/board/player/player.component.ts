import {Component, Input} from '@angular/core';
import {Player} from "../../models/Player";

@Component({
  selector: 'app-player',
  standalone: true,
  imports: [],
  templateUrl: './player.component.html',
  styleUrl: './player.component.scss'
})
export class PlayerComponent {
  @Input() player: Player =  {
    color : "Red",
    id : undefined,
    tokenCount : 2
  }
}
