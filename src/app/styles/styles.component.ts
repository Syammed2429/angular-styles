import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
  styles: [
    `
      .online {
        color: white;
      }
    `,
  ],
})
export class StylesComponent {
  serverStatus: boolean = false;
  serverOnline: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.serverOnline = 'online';
    }, 2000);
    this.serverOnline = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverOnline === 'online' ? 'green' : 'red';
  }
}
