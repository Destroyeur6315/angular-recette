import { Injectable } from "@angular/core";
import { LINK } from "../data/link";
import { Observable, of, retry } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LinkService{
    private link: string[] = [];

    constructor(){
        this.link = LINK;
    }

    getListLink(){
        return this.link;
    }
}