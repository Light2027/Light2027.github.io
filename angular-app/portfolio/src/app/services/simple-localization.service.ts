import { Injectable } from '@angular/core';
import { LocalizationService } from './localization-service.interface';
import { Translation } from '../models/translation';
import { Dictionary } from 'typescript-collections';

@Injectable({
  providedIn: 'root'
})
export class SimpleLocalizationService extends LocalizationService {
  private translations : Dictionary<string, Translation>;
  private language : string;

  constructor(private translations2 : Array<Translation>) 
  { 
    super();
    this.translations = new Dictionary<string, Translation>(x => x);
    translations2.forEach(x => this.translations.setValue(x.key, x));
    this.language = "en";
  }

  public setLanguage(language: string): void 
  {
    this.language = language;
  }
  
  public getLanguage(): string 
  {
    return this.language;
  }

  public getTranslation(key: string): string | undefined
  {
    return this.translations.getValue(key)?.translations?.getValue(this.language);
  }
}
