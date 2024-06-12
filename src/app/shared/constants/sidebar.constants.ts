import { IIconLink } from "@shared/interfaces/layout.interface"

export const sidebarOptions: IIconLink[] = [
  {
    name: 'Dashboard',
    icon: 'bi bi-house-fill',
    router: ['/']
  },
  {
    name: 'Categorías',
    icon: 'bi bi-bookmark-fill',
    router: ['/', 'category']
  },
  {
    name: 'Productos',
    icon: 'bi bi-basket2-fill',
    router: ['/', 'product']
  },
  {
    name: 'Comentarios',
    icon: 'bi bi-chat-square-dots-fill',
    router: ['/', 'comments']
  }
]

export const sidebarOptionsSystem: IIconLink[] = [
  {
    name: 'Apariencia',
    icon: 'bi bi-pen-fill',
    router: ['/', 'appearance']
  },
  {
    name: 'Ajustes',
    icon: 'bi bi-gear-wide-connected',
    router: ['/', 'settings']
  }
]