export interface BasePaginationResponse<T> {
  data: T[];
  pagination: PaginationModel;
}

export interface PaginationModel {
  totalPages: number;
  limit: number;
  page: number;
  totalItems: number;
  next: number | null;
  previous: number | null;
}
