export interface IPagination {
  totalPages: number
  limit: number
  page: number
  totalItems: number
  next: number | null
  previous: number | null
}

export interface IPaginationComponent {
  first: number
  second: number
  final: number
  page: number
  next: number
  previous: number
  totalItems: number
  showSecond: boolean
  showStart: boolean
  showFinal: boolean
  showEllipsis: boolean
}
