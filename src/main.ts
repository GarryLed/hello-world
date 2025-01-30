import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component'; // tell angular to render the AppComponent at the top 

// generates the angular application using the Appcomponent 
// 
bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
