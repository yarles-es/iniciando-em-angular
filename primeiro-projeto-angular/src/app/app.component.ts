import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewComponentComponent } from './components/new-component/new-component.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewComponentComponent],
  template: `
    <!-- <router-outlet></router-outlet> -->
    <h1>Olá Mundo!</h1>
    <div class="dark-theme">
      <app-new-component />
    </div>

    <div>
      <app-new-component />
    </div>
  `,
})
export class AppComponent {
  title = 'primeiro-projeto-angular';
}
