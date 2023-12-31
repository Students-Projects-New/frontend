import { Injectable } from '@angular/core';

import { ISidebar } from "@data/interfaces";
import { MENU_ITEMS } from "@data/constants";

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }

  public get menu(): ISidebar[] {
    return MENU_ITEMS;
  }

}
