import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { EditableListComponent } from './app/editable-list/editable-list.component';


// For development 
/* import { AppModule } from './app/app.module';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

  // For release build
(async () => {
  //create app for injector
  const app = await createApplication({
    providers: [],
  });

  //create custom element
  const inputElement = createCustomElement(EditableListComponent, {
    injector: app.injector,
  });
  
  //define custom element
  customElements.define('editable-list', inputElement);
})();
