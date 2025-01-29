/*
What is the common module? and how do I import it? 


*/

import { Component } from '@angular/core'; // imports component decorator 
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root', //  the components html tag located in the index.html file or other components 
  imports: [RouterOutlet],
  templateUrl: './app.component.html', //  the associated template file 
  styleUrl: './app.component.css'  // the associated css file 
})
export class AppComponent { // component class 
  title = 'hello-world'; // property bound to the template 

  // create a function that changes the title 
changeTitle() {
  this.title = 'My new title'; // this keyword refers to the current instance of the component class 
}
}
