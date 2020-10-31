import {combineReducers} from 'redux'
import films from './films'

const rootReducer = combineReducers({
  films,
})

export type AppState = ReturnType<typeof rootReducer>
export default rootReducer