import * as React from "react";
import {Fragment} from 'react';

const Nav = ( ) => {

  return(

    <Fragment>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <div className="navbar-brand" href='/'>
            <span>Plotter</span>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Nav;