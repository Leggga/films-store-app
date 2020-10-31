import {call, put, takeLatest} from 'redux-saga/effects'
import {getType} from 'typesafe-actions'

import {FilmType} from '@/store/ducks/films/types'
import * as API from '@/api/filmsAPI'
import * as actions from './actions'

function* fetchFilms() {
  try {
    yield put(actions.toggleIsLoading(true))
    const films: FilmType[] = yield call(API.getFilmsAPI)

    yield put(actions.getFilmsSuccess(films))
  } catch (e) {
    yield put(actions.getFilmsFailed())
  } finally {
    yield put(actions.toggleIsLoading(false))
  }
}

export default function* watcherFilmsSaga():Generator {
  yield takeLatest(getType(actions.getFilmsRequest), fetchFilms)
}