export abstract class LocalizationService {
    public abstract setLanguage(language:string) : void;
    public abstract getLanguage() : string;
    public abstract getTranslation(key : string) : string;
}