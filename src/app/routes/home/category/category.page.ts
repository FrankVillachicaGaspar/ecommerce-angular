import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { CategoryService } from '@core/services/category.service';
import { TablePaginationComponent } from '@shared/components/table-navigation/table-pagination.component';
import { TableComponent } from '@shared/components/table/table.component';
import { tableHeader } from '@shared/constants/category.constants';
import { EditDialogComponent } from '@shared/components/category/edit-dialog/edit-dialog.component';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    TableComponent,
    TablePaginationComponent,
    MatButtonModule,
    MatDialogModule,
  ],
  templateUrl: './category.page.html',
  styleUrl: './category.page.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoryService],
})
export class CategoryPage {
  public categoryService = inject(CategoryService);
  readonly editDialog = inject(MatDialog);

  public tableHeader = tableHeader;
  public categories = this.categoryService.categories;
  public pagination = this.categoryService.pagination;

  ngOnInit() {
    this.getCategories();
  }

  openEditDialog(id: number) {
    const category = this.categoryService.selectCategory(id);

    const dialogRef = this.editDialog.open(EditDialogComponent, {
      data: { id, category: category() },
      panelClass: 'custom-dialog-container',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getCategories(page: number = 1) {
    this.categoryService.getCategories(page).subscribe();
  }
}
