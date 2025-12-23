import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { FlagInterface } from '../../models/flag.interface';

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [RouterModule, MatTableModule, MatButtonModule, CommonModule],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.scss'
})
export class GridComponent {
  @Input() flags: FlagInterface[] = [];
  columnsToDisplay = ['image', 'name'];
}
