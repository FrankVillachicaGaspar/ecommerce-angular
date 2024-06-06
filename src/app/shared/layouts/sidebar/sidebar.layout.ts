import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.layout.html',
  styleUrl: './sidebar.layout.css'
})
export class SidebarLayout {
  public sidebar = input.required<boolean>();
  public onChangeSidebar = output();

  onClickBtnShowMenu() {
    this.onChangeSidebar.emit();
  }
}
