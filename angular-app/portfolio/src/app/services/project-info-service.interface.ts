import {ProjectInfo} from "../models/project-info";

export abstract class ProjectInfoService {
    public abstract getProjectInfos():Array<ProjectInfo>;
}
