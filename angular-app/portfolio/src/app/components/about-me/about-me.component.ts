import { Component, OnInit } from '@angular/core';
import { LocalizationService } from 'src/app/services/localization-service.interface';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.sass']
})
export class AboutMeComponent implements OnInit {

  constructor(public ls : LocalizationService) { 
  }

  ngOnInit(): void {
  }

  public toggleLanguage() : void{
    const currentLanguage = this.ls.getLanguage();
    let newLanguage = currentLanguage === "en" ? "de" : "en";
    this.ls.setLanguage(newLanguage);
    console.log("Hello World");
    console.log(`${currentLanguage} => ${newLanguage}`);
    console.log(this.ls.getTranslation("key_Sample"))
  }
}
