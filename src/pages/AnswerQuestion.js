
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {DashboardLayout} from '../components/Layout'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import '../styles/AnswerQuestion.css'
import { signInWithFacebook, signInWithGoogle } from '../configs/FireBase'
import { updateUser } from '../store/actions'

const AnswerQuestion = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.app.user)
  function onFaceLogin() {
    signInWithFacebook((user) => saveUserData(user))
  }
  function onGoogleLogin() {
    signInWithGoogle((user) => saveUserData(user))
  }

  function saveUserData(user) {
    dispatch(updateUser({
      displayName: user.displayName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      photoURL: getUserPhotoUrl(user.photoURL, user.accessToken),
      accessToken: user.accessToken,
    }))
  }

  function getUserPhotoUrl(photoURL, accessToken) {
    if (accessToken) {return `${photoURL}?access_token=${accessToken}&type=large`}
    return photoURL
  }


  if (!user) {return (
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
  )}

  return (
    <DashboardLayout>
      <h2>Hỏi Đáp</h2>
    </DashboardLayout>
  )
}

export default AnswerQuestion