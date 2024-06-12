import { Component, input, output } from '@angular/core';
import { EClickBtnNavbar } from '@shared/enums/layout.enum';

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

  public E_LAYER: EClickBtnNavbar = EClickBtnNavbar.NONE;

  onClickBtnShowMenu() {
    this.onChangeSidebar.emit();
  }

  onClickLayerActive(VALUE: EClickBtnNavbar) {
    this.E_LAYER = VALUE;
  }

  public get typeLayer() {
    return EClickBtnNavbar;
  }
}
