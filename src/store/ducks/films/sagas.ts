import {call, put, takeLatest} from 'redux-saga/effects'
import {ActionType, getType} from 'typesafe-actions'
//redux
import {Film} from '@/store/ducks/films/types'
import * as API from '@/api/filmsAPI'
import * as actions from './actions'
//utils
import {showNotification} from '@/utils/notification'

function* fetchFilms() {
  try {
    yield put(actions.toggleIsLoading(true))
    const films: Film[] = yield call(API.getFilmsAPI)
    yield put(actions.getFilmsSuccess(films))
  } catch {
    yield put(actions.getFilmsFailed())
  } finally {
    yield put(actions.toggleIsLoading(false))
  }
}

function* addFilm({payload}: ActionType<typeof actions.addFilmRequest>) {
  try {
    yield put(actions.toggleIsLoading(true))
    yield call(API.addFilmAPI, payload)
    yield put(actions.addFilmSuccess())
    showNotification('success', "Film successfully added!")
    yield put(actions.getFilmsRequest())
  } catch {
    showNotification('error', "Film not added!")
    yield put(actions.addFilmFailed())
    yield put(actions.toggleIsLoading(false))
  }
}

function* removeFilm({payload}: ActionType<typeof actions.removeFilmRequest>) {
  try {
    yield put(actions.toggleIsLoading(true))
    yield call(API.removeFilmAPI, payload)
    yield put(actions.removeFilmSuccess())
    showNotification('success', "Film successfully removed!")
    yield put(actions.getFilmsRequest())
  } catch {
    showNotification('error', "Film not removed!")
    yield put(actions.removeFilmFailed())
    yield put(actions.toggleIsLoading(false))
  }
}

export default function* watcherFilmsSaga(): Generator {
  yield takeLatest(getType(actions.getFilmsRequest), fetchFilms)
  yield takeLatest(getType(actions.addFilmRequest), addFilm)
  yield takeLatest(getType(actions.removeFilmRequest), removeFilm)
}