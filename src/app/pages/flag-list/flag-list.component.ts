import { Component, signal } from '@angular/core';
import { FlagInterface } from '../../models/flag.interface';
import { FlagService } from '../../services/flag.service';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {
  trigger,
  style,
  animate,
  transition,
  stagger,
  query,
} from '@angular/animations';
import { CardComponent } from '../../components/card/card.component';
import { GridComponent } from '../../components/grid/grid.component';

@Component({
  selector: 'app-flag-list',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatIconModule, MatProgressSpinnerModule, CardComponent, GridComponent],
  templateUrl: './flag-list.component.html',
  styleUrl: './flag-list.component.scss',
  animations: [
    trigger('flagsAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [
            style({ opacity: 0 }),
            stagger(1000, [animate('1000ms', style({ opacity: 1 }))]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})

export class FlagListComponent {
  flags = signal<FlagInterface[]>([]);

  loadingFlags = true;

  constructor( private flagService: FlagService) {}

  ngOnInit(): void {
    this.loadingFlags = true;

    this.flagService.getAllFlags().subscribe(
      (res)=> {
        console.log(res);
        this.flags.set(res.slice(0,50));

        this.loadingFlags = false;
      });   
  }

  columnsToDisplay = ['image', 'name'];

  showTabla: boolean = false;
  showCards: boolean = false;

  tabla(): void {
    this.showTabla = true;
    this.showCards = false;
  }

  cards(): void {
    this.showTabla = false;
    this.showCards = true;
  }

}
