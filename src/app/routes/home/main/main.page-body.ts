import { Component, output } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { FooterLayout } from '@shared/layouts/footer/footer.layout';
import { NavbarLayout } from '@shared/layouts/navbar/navbar.layout';
import { SidebarLayout } from '@shared/layouts/sidebar/sidebar.layout';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [RouterOutlet, FooterLayout, SidebarLayout, NavbarLayout],
  templateUrl: './main.page-body.html',
  styleUrl: './main.page-body.css'
})
export class MainPageBody {
  sidebar = false;

  onClickBtnShowMenu() {
    this.sidebar = !this.sidebar;
  }
}
