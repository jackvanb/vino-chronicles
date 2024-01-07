import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Event } from '../../types/event';

@Component({
  selector: 'app-view-event',
  standalone: true,
  imports: [],
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewEventComponent {
  readonly event: Event = {
    title: "Jack's Wine Night",
    description: 'super fun and  cool wine night',
    address: 'jack house',
    wineList: [],
  };
}
