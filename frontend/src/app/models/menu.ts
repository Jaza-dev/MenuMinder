import { menuItem } from "./menuItem";

export class Menu {

    _id:string = "";

    name:string = "";

    items:menuItem[] = [];

    lastEdited:Date = new Date();
}