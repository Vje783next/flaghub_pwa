import { Component, signal } from '@angular/core';
import { FlagService } from '../../services/flag.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FlagInterface } from '../../models/flag.interface';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';


@Component({
  selector: 'app-flag-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, MatCardModule, MatExpansionModule],
  templateUrl: './flag-detail.component.html',
  styleUrl: './flag-detail.component.scss'
})
export class FlagDetailComponent {

  flagDetail = signal<FlagInterface>({
    name: {
      official: ''
    },
    flags: {
      png: '',
      svg: '',
      alt: '',
    },
    cca3: '',
    capital: [],
    region: '',
    population: 0,
    currencies: {},
    languages: {}
  })

  readonly panelOpenState = signal(false);

  constructor(private flagservice: FlagService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('Identifier --> ', identifier);

    if(identifier) {
      this.flagservice.getFlagById(identifier).subscribe((res) => {
        if(!res) {
          this.router.navigateByUrl('/');
        }

        this.flagDetail.set(res);
        console.log('flagDetail --> ', this.flagDetail());
      })
    }
  }

  languages = (() =>
    Object.values(this.flagDetail().languages).join(', ')
  );
  
  currency = (() => {
    const c = Object.values(this.flagDetail().currencies)[0];
    return c ? `${c.name}` : '';
  });
  
}
