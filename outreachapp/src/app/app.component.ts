import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'outreachapp';

  colors = [{id: 1, name: "Red"},
            {id: 2, name: "Green"},
            {id: 3, name: "Yeelow"}
            ]
  color = 2;
}
