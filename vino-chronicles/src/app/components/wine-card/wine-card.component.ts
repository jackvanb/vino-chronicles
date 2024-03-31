import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StarRatingModule } from 'angular-star-rating';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatChipsModule } from '@angular/material/chips';

import { Wine } from '../../types/wine';
import { WINE_TASTING_NOTES } from '../../shared/tasting_notes';

@Component({
  selector: 'app-wine-card',
  standalone: true,
  imports: [
    CommonModule,
    GoogleMapsModule,
    MatCardModule,
    MatChipsModule,
    StarRatingModule,
  ],
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineCardComponent {
  readonly wineTastingNotes = WINE_TASTING_NOTES;

  /** Default zoom setting on the map. */
  ZOOM = 8;

  @Input({ required: true }) wine!: Wine;

  location: google.maps.LatLngLiteral = {
    lat: 34.04943084716797,
    lng: -118.44223022460938,
  };
}
