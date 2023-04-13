import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Dados';

  dado1: string = '../assets/img/dice1.png';
  dado2: string = '../assets/img/dice4.png';

  caraDado1: number = 1;
  caraDado2: number = 4;

  lanzarDados(): void {
    this.caraDado1 = Math.round(Math.random() * 5) + 1;
    this.caraDado2 = Math.round(Math.random() * 5) + 1;

    this.dado1 = `../assets/img/dice${this.caraDado1}.png`;
    this.dado2 = `../assets/img/dice${this.caraDado2}.png`;
  }
}
