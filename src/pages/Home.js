import React from 'react'

import {DashboardLayout} from '../components/Layout'

const HomePage = () => {
  return (
    <DashboardLayout>
      <div>
        <h2>HomePageaaa</h2>
        <div
          className="fb-like"
          data-share="true"
          data-width="450"
          data-show-faces="true">
        </div>
      </div>
    </DashboardLayout>
  )
}

export default HomePage