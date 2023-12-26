import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'carousel';

  images = [
    {name: 'furina.png', caption:'furina'},
    {name: 'liney.png', caption:'liney'},
    {name: 'hutao.jpg', caption:'hutao'},
  ]
}
