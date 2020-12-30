import { Navigation } from 'react-minimal-side-navigation'
import { useHistory, useLocation } from 'react-router-dom'
import Icon from 'awesome-react-icons'
import React, { useState } from 'react'
import { Strings } from '../configs'
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css'

export const NavSidebar = () => {
  const history = useHistory()
  const location = useLocation()
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

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
        className={'fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0'}
      >
        <div className="flex items-center justify-center mt-10 text-center py-6">
          <span className="mx-2 text-2xl font-semibold text-black">
            Left Menu
          </span>
        </div>

        <Navigation
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
        />

        <div className="absolute bottom-0 w-full my-8">
          <Navigation
            activeItemId={location.pathname}
            items={[
              {
                title: 'Home',
                itemId: '/',
                elemBefore: () => <Icon name="activity" />
              }
            ]}
            onSelect={({ itemId }) => {
              history.push(itemId)
            }}
          />
        </div>
      </div>
    </React.Fragment>
  )
}
