import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Sentry'];
  public deletedHero?: string;


  borrarUltimo(): void{
    this.deletedHero = this.heroNames.pop();

  }
}
