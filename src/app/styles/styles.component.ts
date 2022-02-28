import { Component } from '@angular/core';

@Component({
  selector: 'app-styles',
  templateUrl: './styles.component.html',
})
export class StylesComponent {
  serverStatus: boolean = false;
  serverOnline: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.serverStatus = true;
    }, 200);
    this.serverOnline = Math.random() > 0.5 ? 'online' : 'offline';
  }
  getColor() {
    return this.serverOnline === 'online' ? 'green' : 'red';
  }
}
