import { IPagination, IPaginationComponent } from "@shared/interfaces/pagination.interface";

export const generatePagination = (paginationData: IPagination): IPaginationComponent => {
  let first = 1;
  let second = 2;
  let showSecond = false;
  let showStart = false;
  let showFinal = false;
  let showEllipsis = false;

  // si se tiene de 2 a mas paginas mostrar el boton 2
  showSecond = paginationData.totalPages >= 2;

  // si la página es mayor o igual a 3 mostrar el boton de inicio
  showStart = paginationData.page >= 3;

  // si se tiene de 3 a mas paginas mostrar el boton final
  showFinal = paginationData.totalPages >= 3;

  // si se tiene de 4 a mas paginas mostrar los puntos suspensivos
  showEllipsis = paginationData.totalPages >= 4;

  // si la página actual es mayor o igual a 2 será en boton 2
  if (paginationData.page >= 2) {
    first = paginationData.page - 1;
    second = paginationData.page;

    // si la página actual es la penultima y hay de 3 a mas paginas ocultar puntos suspensivos
    if (paginationData.page === paginationData.totalPages - 1 && paginationData.totalPages >= 3) {
      showEllipsis = false;
    }

    // si la página actual es la última y hay de 3 a mas paginas
    if (paginationData.page === paginationData.totalPages && paginationData.totalPages >= 3) {
      first = paginationData.page - 2;
      second = paginationData.page - 1;
      showEllipsis = false;
    }
  }

  return {
    first,
    second,
    final: paginationData.totalPages,
    next: paginationData.next ?? 0,
    previous: paginationData.previous ?? 0,
    showSecond,
    showStart,
    showFinal,
    showEllipsis
  }
}