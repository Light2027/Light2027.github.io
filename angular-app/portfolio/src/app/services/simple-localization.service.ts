import { Injectable } from '@angular/core';
import { LocalizationService } from './localization-service.interface';
import { Translation } from '../models/translation';

@Injectable({
  providedIn: 'root'
})
export class SimpleLocalizationService extends LocalizationService {
  private translations : Map<string, Translation>;
  private language : string;

  constructor(private translations2 : Array<Translation>) 
  { 
    super();
    this.translations = new Map<string, Translation>(translations2.map(x => [ x.key, x ]));
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
    console.log(JSON.stringify(this.translations));
    console.log(JSON.stringify(this.translations2)); // TODO: Turning arrays and objects into maps fails.

    return this.translations.get(this.language)?.translations?.get(key);
  }
}
