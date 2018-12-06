import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Observable } from 'rxjs';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  animations: [
    trigger('listStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger(
              '50ms',
              animate(
                '550ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class CategoriesComponent implements OnInit {

  categories$: Object;
  show$: boolean = true;

  constructor(private jokes: JokeService) {

  }

  ngOnInit() {
    this.jokes.getCategories().subscribe(data => {
      this.categories$ = data;
      this.show$ = false;
    });
  }

}
