import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { StarRatingModule } from 'angular-star-rating';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    importProvidersFrom(StarRatingModule.forRoot()),
    provideRouter(routes),
    provideClientHydration(),
    provideAnimations()importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"vino-chronicles","appId":"1:942559100849:web:fe7fa71ae3e6ca735b4790","storageBucket":"vino-chronicles.appspot.com","apiKey":"AIzaSyCarl13Q-YGIV0fqHBfVN8AfYBGIRp0Q30","authDomain":"vino-chronicles.firebaseapp.com","messagingSenderId":"942559100849","measurementId":"G-CGB9T9VPC5"})))importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
