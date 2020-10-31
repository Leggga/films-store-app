import {ActionType, createReducer} from 'typesafe-actions'
import {FilmsState} from '@/store/ducks/films/types'
import * as actions from './actions'

export const filmFormats = {'VHS': 'VHS', 'DVD': 'DVD', 'Blu-Ray': 'Blu-Ray'}
export type FilmsActions = ActionType<typeof actions>

const initialState: FilmsState = {
  list: [],
  filters: {
    sortOrder: 'natural',
    byTitle: '',
    byAuthor: ''
  },
  isLoading: false,
}

const reducer = createReducer<FilmsState, FilmsActions>(initialState)
  .handleAction(actions.getFilmsSuccess, (state, {payload}) => ({...state, list: payload}))
  .handleAction(actions.setTitleFilter, (state, {payload}) => ({...state, filters: {...state.filters, byTitle: payload}}))


export default reducer