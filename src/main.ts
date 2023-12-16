import { createApplication } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { EditableListComponent } from './app/editable-list/editable-list.component';

// import { AppModule } from './app/app.module';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));

(async () => {
  const app = await createApplication({
    providers: [],
  });

  const inputElement = createCustomElement(EditableListComponent, {
    injector: app.injector,
  });
  customElements.define('editable-list', inputElement);
})();
