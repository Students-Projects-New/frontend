import { Component, OnInit, Input } from '@angular/core';
import { ISidebar } from '@data/interfaces';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  @Input() menuItems!: ISidebar[];

  constructor() { }

  ngOnInit(): void {
  }

}
