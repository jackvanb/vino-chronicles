import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  doc,
  getDoc,
  addDoc,
  collection,
} from '@angular/fire/firestore';

import { Event } from '../types/event';

import { WinesService } from './wines.service';

const EVENT_COLLECTION_ID = 'events';

@Injectable({
  providedIn: 'root',
})
export class EventsService {
  constructor(private winesService: WinesService) {}

  private db: Firestore = inject(Firestore);

  async getEvent(id: string): Promise<Event | undefined> {
    const eventRef = doc(this.db, EVENT_COLLECTION_ID, id);
    const eventSnap = await getDoc(eventRef);

    if (eventSnap.exists()) {
      const data = eventSnap.data();
      const wines = data['wineIds']
        ? await this.winesService.getWines(data['wineIds'])
        : [];

      return {
        title: data['title'],
        description: data['description'],
        address: data['address'],
        wineList: [...wines],
      };
    } else {
      console.error('Event does not exist.');
      return undefined;
    }
  }

  async createEvent(event: Event): Promise<string> {
    const wineIds = await this.winesService.createWines(event.wineList);
    const newEventRef = await addDoc(collection(this.db, EVENT_COLLECTION_ID), {
      title: event.title,
      description: event.description,
      address: event.address,
      wineIds: wineIds,
    });
    return newEventRef.id;
  }
}
