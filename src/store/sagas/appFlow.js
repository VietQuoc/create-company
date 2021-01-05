import { put, take } from 'redux-saga/effects'
import { reset } from '../actions'


export default function* appFlow() {
  while (true) {
    yield take('persist/REHYDRATE')
    yield put({ type: reset().type })
  }
}

