import { Component, Input } from '@angular/core';
import { Compound } from '../../../interfaces/compound';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() compound: Compound = {} as Compound;
}
