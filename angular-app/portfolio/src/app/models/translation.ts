import { Dictionary } from "typescript-collections";

export class Translation {
    constructor(
        public key:string, 
        public translations:Dictionary<string,string>
        ){
    }
}