import {createSelector} from 'reselect'
import {AppState} from '@/store/ducks/rootReducer'


const selectFilmsState = (state: AppState) => state.films

export const selectFilms = createSelector(selectFilmsState, state => state.list)
export const selectFilmsFilters = createSelector(selectFilmsState, state => state.filters)
export const selectFilmsByFilters = createSelector(selectFilmsState, selectFilmsFilters,
  (state, filters) => {
    return state.list.filter(film => film.title.toLowerCase().includes(filters.byTitle))
  })


export const selectIsLoading = createSelector(selectFilmsState, filmsState => filmsState.isLoading)