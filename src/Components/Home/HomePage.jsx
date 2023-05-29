import React, { Fragment } from 'react'
import classes from  "../../styles/home.module.scss"
const HomePage = () => {
  return (
    <Fragment>
        <div className={classes.home__container}>
            <h1 className={classes.h1}>STAR <br /> WARS</h1>
        </div>
    </Fragment>
        
  )
}

export default HomePage