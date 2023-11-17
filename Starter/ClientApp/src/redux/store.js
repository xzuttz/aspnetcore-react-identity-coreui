import reduxThunk from 'redux-thunk'
import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  duration: true,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(reduxThunk, logger)))
export default store
