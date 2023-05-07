import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  housingLocationList: HousingLocation[] = [
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      wifi: true,
      photo: 'https://picsum.photos/300',
      availableUnits: 99,
      state: 'ST',
      laundry: false,
    },
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      wifi: true,
      photo: 'https://picsum.photos/300',
      availableUnits: 99,
      state: 'ST',
      laundry: false,
    },
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      wifi: true,
      photo: 'https://picsum.photos/300',
      availableUnits: 99,
      state: 'ST',
      laundry: false,
    },
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      wifi: true,
      photo: 'https://picsum.photos/300',
      availableUnits: 99,
      state: 'ST',
      laundry: false,
    },
    {
      id: 999,
      name: 'Test Home',
      city: 'Test City',
      wifi: true,
      photo: 'https://picsum.photos/300',
      availableUnits: 99,
      state: 'ST',
      laundry: false,
    },
  ];
  constructor() {}

  getAllHousingLocations(): HousingLocation[] {
    return this.housingLocationList;
  }

  getHousingLocationById(id: number): HousingLocation | undefined {
    return this.housingLocationList.find((h) => h.id === id);
  }
}
