import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { WineCardComponent } from '../../components/wine-card/wine-card.component';
import { Event } from '../../types/event';
import { Wine } from '../../types/wine';

@Component({
  selector: 'app-view-event',
  standalone: true,
  imports: [CommonModule, MatIconModule, WineCardComponent],
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewEventComponent {
  readonly wine: Wine = {
    title: '2022 Cotes Du Rhone Villages Rouge',
    description:
      'A touch of supple tannin and a stony finish provide texture and just enough grit to this smooth-flowing rouge. It is a plump, yet delightfully juicy Rhône red that can be sipped casually with a slight chill as an apéritif or on movie night, but has enough weight to stand up to burgers, pizza, grilled meats, or anything else you might throw its way.',
  };

  readonly event: Event = {
    title: "Jack's Wine Night",
    description: 'super fun and  cool wine night',
    address: 'jack house',
    wineList: [this.wine, this.wine],
  };
}
