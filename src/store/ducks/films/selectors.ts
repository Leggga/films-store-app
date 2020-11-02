import {createSelector} from 'reselect'
import {AppState} from '@/store/ducks/rootReducer'
import {sortStrings} from '@/utils'

const selectFilmsState = (state: AppState) => state.films
const selectAllFilms = createSelector(selectFilmsState, state => state.list)

export const selectFilmsFilters = createSelector(selectFilmsState, state => state.filters)
export const selectFilmsSortOrder = createSelector(selectFilmsState, state => state.sortOrder)

//filters
const selectFilmsByTitle = createSelector([selectAllFilms, selectFilmsFilters],
  (films, filters) =>
    films.filter(film => film.title.toLowerCase().includes(filters.byTitle))
)
const selectFilmsByAuthor = createSelector([selectFilmsByTitle, selectFilmsFilters],
  (films, filters) =>
    films.filter(film => !film.stars.length || film.stars.some(star => star.toLowerCase().includes(filters.byStars)))
)
//sort
export const selectFilmsByConditions = createSelector([selectFilmsByAuthor, selectFilmsSortOrder],
  (films, sortOrder) => {
    return sortOrder ? [...films].sort((a, b) => sortStrings(a.title, b.title, sortOrder)) : films
  })

export const selectIsLoading = createSelector(selectFilmsState, filmsState => filmsState.isLoading)