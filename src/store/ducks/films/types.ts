import {SortOrder} from 'antd/es/table/interface'

export const filmFormats = {'VHS': 'VHS', 'DVD': 'DVD', 'Blu-Ray': 'Blu-Ray'}

export type FilmsFormat = keyof typeof filmFormats

export interface FilmTemp {
  title: string
  release_year: number
  format: FilmsFormat
  stars: string[]
}

export interface Film extends FilmTemp{
  id: string
}

export type Filter = {
  byTitle: string
  byStars: string
}

export type FilmsState = Readonly<{
  list: Film[]
  filters: Filter
  sortOrder?: SortOrder
  isLoading: boolean
}>