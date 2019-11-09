import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from '../reducers'

const configureStore = (preloadState)  => {
  const middlewares = [thunkMiddleware]
  const middleWareEnhancer = applyMiddleware(...middlewares)
  const composeEnhancers = composeWithDevTools(middleWareEnhancer)
  const store = createStore(rootReducer, preloadState, composeEnhancers)
  return store
}

export default configureStore()
