import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  addDoc,
  collection,
} from '@angular/fire/firestore';

import { Wine } from '../types/wine';

const WINE_COLLECTION_ID = 'wines';

@Injectable({
  providedIn: 'root',
})
export class WinesService {
  private db: Firestore = inject(Firestore);

  async getWines(ids: string[]): Promise<Wine[]> {
    const wines = await Promise.all(ids.map((id) => this.getWine(id)));
    return wines.filter((wine) => wine !== undefined) as Wine[];
  }

  async createWines(wineList: Wine[]): Promise<string[]> {
    const wineIds = await Promise.all(
      wineList.map((wine) => this.createWine(wine))
    );
    return wineIds;
  }

  private async getWine(id: string): Promise<Wine | undefined> {
    const wineRef = doc(this.db, WINE_COLLECTION_ID, id);
    const wineSnap = await getDoc(wineRef);

    if (wineSnap.exists()) {
      const data = wineSnap.data();
      const wine: Wine = {
        title: data['title'],
        description: data['description'],
        tastingNotes: [],
      };
      if (data['lat'] && data['lng']) {
        wine.location = { lat: data['lat'], lng: data['lng'] };
      }
      if (data['tastingNotes']) {
        wine.tastingNotes = data['tastingNotes'];
      }
      return wine;
    } else {
      console.error('Wine does not exist.');
      return undefined;
    }
  }

  private async createWine(wine: Wine): Promise<string> {
    const newWineRef = await addDoc(collection(this.db, WINE_COLLECTION_ID), {
      title: wine.title,
      description: wine.description,
      lat: wine.location?.lat,
      lng: wine.location?.lng,
      tastingNotes: wine.tastingNotes,
    });

    return newWineRef.id;
  }
}
