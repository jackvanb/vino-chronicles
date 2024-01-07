import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-wine-card',
  standalone: true,
  imports: [],
  templateUrl: './wine-card.component.html',
  styleUrl: './wine-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WineCardComponent {

}
