import { Image } from "./image";
import { Technology } from "./technology";

export class ProjectInfo {
    constructor(
        public name:string, 
        public description:string, 
        public gitHubLink:string, 
        public images:Array<Image>, 
        public technologies:Array<Technology>
        ){
    }
}