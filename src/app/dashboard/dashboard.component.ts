import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../heroes/hero.model';
import { HeroService } from '../heroes/hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] =[];
  constructor(@Inject('hero') private service) { }

  ngOnInit() {
    this.getHeroes();
  }
  getHeroes(): void {
     this.service.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(1, 5));
  }

}
