export interface LocalizationService {
    setLanguage(language:string) : void;
    getLanguage() : string;
    getTranslation(key : string) : string;
}