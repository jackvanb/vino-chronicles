import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  ChangeDetectorRef,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { WineCardComponent } from '../../components/wine-card/wine-card.component';
import { Event } from '../../types/event';
import { Wine } from '../../types/wine';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-view-event',
  standalone: true,
  imports: [CommonModule, MatIconModule, WineCardComponent],
  providers: [EventsService],
  templateUrl: './view-event.component.html',
  styleUrl: './view-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ViewEventComponent implements OnInit {
  constructor(
    private eventsService: EventsService,
    private cd: ChangeDetectorRef
  ) {}

  @Input({ required: true }) private readonly id!: string;

  event?: Event;

  ngOnInit(): void {
    this.loadEvent();
  }

  private async loadEvent() {
    this.event = await this.eventsService.getEvent(this.id);
    this.cd.markForCheck();
  }
}
