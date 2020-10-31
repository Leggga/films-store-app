import {filmFormats} from '@/store/ducks/films/index'

export type FilmsFormat = keyof typeof filmFormats

export type FilmType = {
  id: number
  title: string
  release_year: number
  format: FilmsFormat
  stars: string[]
}

export type SortOrder = 'desc' | 'asc' | 'natural'

export type Filter = {
  sortOrder: SortOrder
  byTitle: string
  byAuthor: string
}

export type FilmsState = Readonly<{
  list: FilmType[]
  filters: Filter
  isLoading: boolean
}>