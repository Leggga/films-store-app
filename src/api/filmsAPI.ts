import API from '@/api'
import {FilmType} from '@/store/ducks/films/types'


export const getFilmsAPI = (): Promise<FilmType[]> => API.get<FilmType[]>('/films').then(resp => resp.data)