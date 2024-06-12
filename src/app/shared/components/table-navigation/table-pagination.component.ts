import { NgClass } from '@angular/common';
import { Component, input, output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { IPagination, IPaginationComponent } from '@shared/interfaces/pagination.interface';
import { generatePagination } from '@shared/utils/pagination.util';

@Component({
  selector: 'app-table-pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.css'
})
export class TablePaginationComponent {
  public pagination = input.required<IPagination>();
  public emitChangePage = output<number>();

  public clickSubject = new Subject<void>();
  public clickSubscription!: Subscription;

  public paginationComponent!: IPaginationComponent;
  public isClickNext = false;
  public clickCount = 0;

  ngOnInit() {
    this.paginationComponent = generatePagination(this.pagination());
    this.generateClickSubscription();
  }

  onClickBtnPagination(page: number) {
    if (page === this.pagination().page) return;

    this.emitChangePage.emit(page);
  }

  onClickBtnNextAndPrevious(isNext: boolean) {
    this.isClickNext = isNext;
    this.clickSubject.next(); //! (importante)
  }

  //! (importante) si dan muchos clicks al botón no realizar varias peticiones al servidor
  generateClickSubscription() {
    this.clickSubscription = this.clickSubject.pipe(
      // Mapear cada clic a un valor de 1
      map(() => 1),
      // Acumular los clics en el contador interno
      tap(() => this.clickCount++),
      // Esperar 1 segundo de inactividad para emitir el valor acumulado
      debounceTime(1000),
      // Tap para manejar efectos secundarios y reiniciar el contador
      tap(() => {
        console.log("clickCount", this.clickCount);
        let page: number = 1;

        if (this.isClickNext) {
          page = this.pagination().page + this.clickCount;
          page = (page > this.pagination().totalPages) ? this.pagination().totalPages : page;
        } else {
          page = this.pagination().page - this.clickCount;
          page = (page < 1) ? 1 : page;
        }

        this.clickCount = 0;  // Reiniciar el contador
        this.onClickBtnPagination(page);
      })
    ).subscribe();
  }

  ngOnDestroy() {
    if (this.clickSubscription) {
      this.clickSubscription.unsubscribe();
    }
  }
}
