import {createAction} from 'typesafe-actions'
import {SortOrder} from 'antd/es/table/interface'
import {Film, FilmTemp} from '@/store/ducks/films/types'

export const getFilmsRequest = createAction('films/GET_FILMS_REQUEST')()
export const getFilmsSuccess = createAction('films/GET_FILMS_SUCCESS', (films: Film[]) => films)()
export const getFilmsFailed = createAction('films/GET_FILMS_FAILED')()

export const addFilmRequest = createAction('films/ADD_FILM_REQUEST', (film: FilmTemp) => film)()
export const addFilmSuccess = createAction('films/ADD_FILM_SUCCESS')()
export const addFilmFailed = createAction('films/ADD_FILM_FAILED')()

export const removeFilmRequest = createAction('films/REMOVE_FILM_REQUEST', (id: string) => id)()
export const removeFilmSuccess = createAction('films/REMOVE_FILM_SUCCESS')()
export const removeFilmFailed = createAction('films/REMOVE_FILM_FAILED')()

export const toggleIsLoading = createAction('films/TOGGLE_IS_LOADING', (isLoading: boolean) => isLoading)()

//filters
export const setTitleFilter = createAction('films/SET_TITLE_FILTER', (title: string) => title.toLowerCase())()
export const setStarFilter = createAction('films/SET_STAR_FILTER', (star: string) => star.toLowerCase())()
export const setSortOrder = createAction('films/SET_SORT_ORDER', (order?: SortOrder) => order)()