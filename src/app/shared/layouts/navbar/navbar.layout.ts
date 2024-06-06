import { Component, input, output } from '@angular/core';

enum TypeClickBtnNavbar {
  NONE = 0,
  NOTIFICATION = 1,
  USER = 2
}

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.layout.html',
  styleUrl: './navbar.layout.css'
})
export class NavbarLayout {
  public sidebar = input.required<boolean>();
  public onChangeSidebar = output();

  public E_LAYER: TypeClickBtnNavbar = TypeClickBtnNavbar.NONE;

  onClickBtnShowMenu() {
    this.onChangeSidebar.emit();
  }

  onClickLayerActive(VALUE: TypeClickBtnNavbar) {
    this.E_LAYER = VALUE;
  }

  public get typeLayer() {
    return TypeClickBtnNavbar;
  }
}
