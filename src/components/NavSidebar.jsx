import { Navigation } from 'react-minimal-side-navigation'
import { useHistory, useLocation } from 'react-router-dom'
import Icon from 'awesome-react-icons'
import { useSelector, useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { Strings } from '../configs'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'
import '../styles/NavSlidebar.css'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import { signInWithFacebook, signInWithGoogle } from '../configs/FireBase'
import { useWindowDimensions } from '../hooks'
import { updateUser } from '../store/actions'

export const NavSidebar = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()
  const user = useSelector(state => state.app.user)
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const { height } = useWindowDimensions()


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

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      <div
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? 'block' : 'hidden'
        }`}
      />
      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        id='seconddiv'
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? '' : 'coolclass'
        }`}
      >
        <div className="flex items-center justify-center text-center py-6" style={{ flexDirection: 'column' }}>
          {user && <img 
            src={user.photoURL}
            style={{ borderRadius: 50, width: 100, height: 100 }}
            alt="new"
          />}
          {user && <span className="mx-2 text-2xl font-semibold text-red-300">{user.displayName}</span>}
          {user && <span className="mx-1 text-xs font-semibold text-gray-600">{user.email}</span>}
          {!user && <span className="mx-2 text-2xl font-semibold text-black">Welcome</span>}
        </div>
        {isSidebarOpen && <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            history.push(itemId)
          }}
          items={[
            {
              title: 'Home',
              itemId: '/',
              elemBefore: () => <Icon name="coffee" />
            },
            {
              title: Strings.registration,
              itemId: '/registration',
              elemBefore: () => <Icon name="inbox" />,
              subNav: [
                {
                  title: Strings.consultationScheduling,
                  itemId: '/sheduling',
                },
                {
                  title: Strings.requestAQuote,
                  itemId: '/quote',
                },
                {
                  title: Strings.judicialRecord,
                  itemId: '/judicial',
                },
                {
                  title: Strings.trademarkLookup,
                  itemId: '/trademark',
                },
                {
                  title: Strings.priceList,
                  itemId: '/price',
                },
              ]
            },
            {
              title: Strings.answerQuestion,
              itemId: '/question',
              elemBefore: () => <Icon name="help-circle" />
            },
          ]}
        />}
        {height >= 400 && !user &&<div style={{ position: 'absolute', bottom: 10, alignItems: 'center', marginLeft: 20, marginRight: 20 }}>
          <p style={{ textAlign: 'center' }}>Login!</p>
          <button className="loginButton" onClick={onGoogleLogin}>
            <img src={google} />
          </button>
          <button className="loginButton" onClick={onFaceLogin} >
            <img src={facebook} />
          </button>
        </div>}
      </div>
    </React.Fragment>
  )
}
