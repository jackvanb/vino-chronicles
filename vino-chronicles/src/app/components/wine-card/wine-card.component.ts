import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { StarRatingModule } from 'angular-star-rating';

import { Wine } from '../../types/wine';

@Component({
  selector: 'app-wine-card',
  standalone: true,
  imports: [MatCardModule, StarRatingModule],
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WineCardComponent {
  @Input({ required: true }) wine!: Wine;
}
