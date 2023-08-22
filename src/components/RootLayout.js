import React from 'react'
import { Outlet } from "react-router-dom";

import MainNavigation from './MainNavigation';
import classes from './RootLayout.module.css'

const RootLayout = () => {
  return (
    <React.Fragment>
      <MainNavigation />
      <main className={classes.content}>
        <Outlet />
      </main>
    </React.Fragment>
  )
}

export default RootLayout