import {createAction} from 'typesafe-actions'
import {FilmType} from '@/store/ducks/films/types'


export const getFilmsRequest = createAction('films/GET_FILMS_REQUEST')()
export const getFilmsSuccess = createAction('films/GET_FILMS_SUCCESS', (films: FilmType[]) => films)()
export const getFilmsFailed = createAction('films/GET_FILMS_FAILED')()

export const toggleIsLoading = createAction('films/TOGGLE_IS_LOADING', (isLoading: boolean) => isLoading)()

//filters
export const setTitleFilter = createAction('films/SET_TITLE_FILTER', (title: string) => title)()