import { fork } from 'redux-saga/effects'
import appFlow, { resetHomePageParams, setErrorMessageShowFlow } from './appFlow'

// Root saga
export default function* root() {
  yield fork(appFlow)
}
