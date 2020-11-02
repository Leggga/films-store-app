import {SortOrder} from 'antd/es/table/interface'
import {FilmsFormat} from '@/store/ducks/films/types'

export const sortStrings = (str1: string, str2: string, sortOrder: SortOrder): number => {
  switch (sortOrder) {
    case 'ascend':
      return str2.localeCompare(str1)
    case 'descend':
      return str1.localeCompare(str2)
    default:
      return 0
  }
}
export const getFormatFilmColor = (format: FilmsFormat): string => {
  switch (format) {
    case 'Blu-Ray':
      return 'geekblue'
    case 'DVD':
      return 'green'
    case 'VHS':
      return 'lightgray'
  }
}