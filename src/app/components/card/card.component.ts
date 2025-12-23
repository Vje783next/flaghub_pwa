import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, RouterModule],
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() name!: string;
  @Input() flag!: string;
  @Input() cca3!: string;  
}
