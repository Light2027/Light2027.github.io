import { Injectable } from '@angular/core';
import { LocalizationService } from './localization-service.interface';
import { Translation } from '../models/translation';

@Injectable({
  providedIn: 'root'
})
export class SimpleLocalizationService extends LocalizationService {

  constructor(translations : Array<Translation>) 
  { 
    super();
  }

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
