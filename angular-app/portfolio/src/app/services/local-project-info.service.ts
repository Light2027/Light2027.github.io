import { Injectable } from '@angular/core';
import { ProjectInfo } from "../models/project-info";
import { ProjectInfoService } from "./project-info-service.interface";

@Injectable({
  providedIn: 'root'
})

export class LocalProjectInfoService extends ProjectInfoService{
    constructor(
        private projectInfos:Array<ProjectInfo>
    ){
        super();
    }

    public getProjectInfos(): Array<ProjectInfo> {
        // Not returning a copy, as it is unnecessary here.
        return this.projectInfos;
    }
}