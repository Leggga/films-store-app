import {ActionType, createReducer} from 'typesafe-actions'
import {FilmsState} from '@/store/ducks/films/types'
import * as actions from './actions'

export const filmFormats = {'VHS': 'VHS', 'DVD': 'DVD', 'Blu-Ray': 'Blu-Ray'}
export type FilmsActions = ActionType<typeof actions>

const initialState: FilmsState = {
  list: [],
  filters: {
    byTitle: '',
    byStars: ''
  },
  sortOrder: null,
  isLoading: false,
}

const reducer = createReducer<FilmsState, FilmsActions>(initialState)
  .handleAction(actions.getFilmsSuccess, (state, {payload}) => ({...state, list: payload}))
  .handleAction(actions.toggleIsLoading, (state, {payload}) => ({...state, isLoading: payload}))
  .handleAction(actions.setTitleFilter, (state, {payload}) => ({
    ...state,
    filters: {...state.filters, byTitle: payload}
  }))
  .handleAction(actions.setStarFilter, (state, {payload}) => ({...state, filters: {...state.filters, byStars: payload}}))
  .handleAction(actions.setSortOrder, (state, {payload}) => ({...state, sortOrder: payload}))

export default reducer