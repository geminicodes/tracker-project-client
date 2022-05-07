import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import useStyles from './styles';

const Footer = () => {
  const classes = useStyles();

  return ( 
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Toolbar className={classes.toolbar}>
        <p>portfolio project by Valentina (Val) Mekhonoshina built with React, Redux, Material UI, Express, Node, MongoDB. </p>
        <div className={classes.link}>
        <a href="https://github.com/geminicodes/tracker-project-client">github code here</a>
        <a> and </a>
        <a href="https://github.com/geminicodes/tracker-project-server">here.</a>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;

