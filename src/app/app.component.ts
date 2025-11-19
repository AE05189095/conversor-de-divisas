import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    // Ensure the 'dark' class is present on app start.
    // This is useful if any components/styles rely on the .dark class.
    try {
      document.body.classList.add('dark');
    } catch (e) {
      // document may be undefined in some server-side contexts; ignore safely.
      // No-op.
    }
  }
}
