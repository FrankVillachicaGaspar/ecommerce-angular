import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { sidebarOptions, sidebarOptionsSystem } from '@shared/constants/sidebar.constants';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './sidebar.layout.html',
  styleUrl: './sidebar.layout.css'
})
export class SidebarLayout {
  public sidebar = input.required<boolean>();
  public onChangeSidebar = output();

  public sidebarOptions = sidebarOptions;
  public sidebarOptionsSystem = sidebarOptionsSystem;

  onClickBtnShowMenu() {
    this.onChangeSidebar.emit();
  }
}
