
import React from 'react'

import {DashboardLayout} from '../components/Layout'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import '../styles/AnswerQuestion.css'
import { signInWithFacebook, signInWithGoogle } from '../configs/FireBase'

const AnswerQuestion = () => {
  function onFaceLogin() {
    signInWithFacebook((a) => console.log(a))
  }
  function onGoogleLogin() {
    signInWithGoogle((a) => console.log(a))
  }
  return (
    <DashboardLayout>
      <div className="container">
        <p className="title">Please Login!</p>
        <button className="loginButton" onClick={onGoogleLogin}>
          <img src={google} />
        </button>
        <button className="loginButton" onClick={onFaceLogin} >
          <img src={facebook} />
        </button>
        
      </div>
    </DashboardLayout>
  )
}

export default AnswerQuestion