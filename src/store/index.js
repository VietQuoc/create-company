import { createStore, applyMiddleware, compose } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@callstack/async-storage'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import rootSaga from './sagas'

// Redux persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Saga
const sagaMiddleware = createSagaMiddleware()

// Redux devtool
// eslint-disable-next-line no-undef
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Creates the Redux store using our reducer and the logger and saga middlewares
export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
)

export const persistor = persistStore(store)

// We run the root saga automatically
sagaMiddleware.run(rootSaga)
