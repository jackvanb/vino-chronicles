import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-create-list',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './create-list.component.html',
  styleUrl: './create-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateListComponent {
  wines: number[] = [];

  addWine() {
    this.wines.push(this.wines.length + 1);
  }

  onSave() {
    
  }
}
