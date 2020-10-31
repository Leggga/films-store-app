import {all} from 'redux-saga/effects'
import filmsSaga from './films/sagas'

export default function* rootSaga(): Generator {
  yield all([
    filmsSaga()
  ])
}