import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CategoryResponse } from '@core/models/category/category-response.model';

@Component({
  selector: 'app-edit-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  templateUrl: './edit-dialog.component.html',
  styleUrl: './edit-dialog.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditDialogComponent {
  protected categoryForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(5)]),
    desc: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16),
    ]),
  });

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: { id: number; category: CategoryResponse | undefined }
  ) {
    this.categoryForm.setValue({
      name: this.data.category?.name ?? '',
      desc: this.data.category?.desc ?? '',
    });
  }

  ngOnInit() {
    console.log(this.data);
  }
}
