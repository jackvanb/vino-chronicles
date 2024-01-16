import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ChangeDetectorRef,
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  UntypedFormArray,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterModule } from '@angular/router';

import { Event } from '../../types/event';
import { EventsService } from '../../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [EventsService],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent {
  constructor(
    private cd: ChangeDetectorRef,
    private eventsService: EventsService,
    private router: Router
  ) {}

  readonly eventForm = new FormGroup({
    title: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
  });

  readonly wineFormArray = new UntypedFormArray([]);
  readonly wineForm = new FormGroup({
    wine: this.wineFormArray,
  });

  savingEvent = false;

  addWine() {
    this.wineFormArray.push(
      new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
      })
    );
  }

  async onSave() {
    if (this.eventForm.valid && this.wineForm.valid) {
      const event: Event = {
        title: this.eventForm.get('title')?.value ?? '',
        address: this.eventForm.get('address')?.value ?? '',
        description: this.eventForm.get('description')?.value ?? '',
        wineList: this.wineFormArray.controls.map((group) => {
          return {
            title: group.get('title')?.value ?? '',
            description: group.get('description')?.value ?? '',
          };
        }),
      };

      this.savingEvent = true;
      this.cd.markForCheck();
      const eventId = await this.eventsService.createEvent(event);
      this.savingEvent = false;
      this.cd.markForCheck();

      this.router.navigate(['/event', eventId]);
    }
  }
}
