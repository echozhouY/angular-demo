import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from './hero.model';
import { HEROES } from './mock-heroes';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  constructor(@Inject('hero') private service) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
    this.service.getHeroes().subscribe(heroes => this.heroes = heroes);;
  }

}
