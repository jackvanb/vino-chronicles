import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
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

import { Event } from '../../types/event';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './create-event.component.html',
  styleUrl: './create-event.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateEventComponent {
  readonly eventForm = new FormGroup({
    title: new FormControl(''),
    address: new FormControl(''),
    description: new FormControl(''),
  });

  readonly wineFormArray = new UntypedFormArray([]);
  readonly wineForm = new FormGroup({
    wine: this.wineFormArray,
  });

  addWine() {
    this.wineFormArray.push(
      new FormGroup({
        title: new FormControl(''),
        description: new FormControl(''),
      })
    );
  }

  onSave() {
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
      console.log(event);
    }
  }
}
