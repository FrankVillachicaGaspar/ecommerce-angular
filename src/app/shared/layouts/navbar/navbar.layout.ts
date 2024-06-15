import { Component, input, output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '@core/services/auth.service';
import { EClickBtnNavbar } from '@shared/enums/layout.enum';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.layout.html',
  styleUrl: './navbar.layout.css',
})
export class NavbarLayout {
  public sidebar = input.required<boolean>();
  public onChangeSidebar = output();

  public E_LAYER: EClickBtnNavbar = EClickBtnNavbar.NONE;

  constructor(private authService: AuthService, private router: Router) {}

  public get typeLayer() {
    return EClickBtnNavbar;
  }

  onClickBtnShowMenu() {
    this.onChangeSidebar.emit();
  }

  onClickLayerActive(VALUE: EClickBtnNavbar) {
    this.E_LAYER = VALUE;
  }

  onClickLogout() {
    this.authService.deleteToken();
    this.router.navigate(['auth', 'login']);
  }
}
