import { Injectable } from '@angular/core';
import { Food } from '../food';

@Injectable({
    providedIn: 'root',
})
export class StorageService {
    constructor() {}

    public getData(key: string): Food[] {
        return JSON.parse(localStorage.getItem(key));
    }

    public setData(key: string, data: any): void {
        localStorage.setItem(key, JSON.stringify(data));
    }
}
