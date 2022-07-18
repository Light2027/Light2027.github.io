import { Injectable } from '@angular/core';
import { LocalizationService } from './localization-service.interface';

@Injectable({
  providedIn: 'root'
})
export class SimpleLocalizationService implements LocalizationService {

  constructor() { }

  setLanguage(language: string): void 
  {
    throw new Error('Method not implemented.');
  }
  
  getLanguage(): string 
  {
    throw new Error('Method not implemented.');
  }

  getTranslation(key: string): string 
  {
    throw new Error('Method not implemented.');
  }
}
