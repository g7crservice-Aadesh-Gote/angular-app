import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

// Register Service Worker for PWA (for all environments, including local)
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/ngsw-worker.js')
    .then((registration) => {
      console.log('Service Worker registered', registration);
    })
    .catch(err => {
      console.error('Service Worker registration failed', err);
    });
}

platformBrowserDynamic().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true
}).catch(err => console.error(err));
