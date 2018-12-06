import { Component, OnInit } from '@angular/core';
import { JokeService } from '../joke.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.scss']
})
export class JokeComponent implements OnInit {

  joke$: Object;
  category$: String;
  show$: boolean = true;

  constructor(private route: ActivatedRoute, private jokes: JokeService) {
    
    this.route.params.subscribe((params) => {
      this.category$ = params.category;
    });
   }

  ngOnInit() {
    this.getJoke();
  }

  getJoke(){
    this.jokes.getJokeFromCategory(this.category$).subscribe((data) => {
      this.joke$ = data;
      this.show$ = false;
    });
  }

  getAnotherJoke() {
    this.show$ = true;
    this.getJoke();
  }

}
