import projectInfoStore from "../assets/project-info-store.json";
import translations from "../assets/translations.json";

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ImprintComponent } from './components/imprint/imprint.component';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { ProjectInfoComponent } from './components/project-info/project-info.component';
import { TechnologyBoardComponent } from './components/technology-board/technology-board.component';

import { ProjectInfo } from "./models/project-info";
import { ProjectInfoService } from "./services/project-info-service.interface";
import { LocalProjectInfoService } from "./services/local-project-info.service";

import { Translation } from "./models/translation";
import { SimpleLocalizationService } from "./services/simple-localization.service";
import { LocalizationService } from "./services/localization-service.interface";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutMeComponent,
    ProjectsComponent,
    ImprintComponent,
    ImageCarouselComponent,
    ProjectInfoComponent,
    TechnologyBoardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: ProjectInfoService, 
      useExisting: LocalProjectInfoService, 
      useValue: new LocalProjectInfoService(<Array<ProjectInfo>>projectInfoStore.projectsInfos)
    },
    {
      provide: LocalizationService, 
      useExisting: SimpleLocalizationService, 
      useValue: new SimpleLocalizationService(translations.map(x => new Translation(x.key, new Map<string, string>(Object.entries(x.translations)))))
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
