import React, { useState, useEffect } from 'react';
import { AppBar, Typography, Toolbar, Avatar, Button } from '@material-ui/core';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import newLogo from '../../images/newLogo.png';
import * as actionType from '../../constants/actionTypes';
import useStyles from './styles';

const Navbar = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    history.push('/auth');

    setUser(null);
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem('profile')));
  }, [location]);

  return ( 
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Link to="/" >
          <img component={Link} to="/" className={classes.image} src={newLogo} alt="icon" height="35px" />
        </Link>
        <div className={classes.heading}>
          <h1>Job Application Tracker</h1>
        </div>
      </div>
      <Toolbar className={classes.toolbar}>
        {user?.result ? (
          <>
          <div className={classes.profile}>
            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>{user?.result.name.charAt(0)}</Avatar>
            <Typography className={classes.userName} variant="h6">{user?.result.name}</Typography>
          </div>
          <Button variant="contained" className={`${classes.logout} ${classes.root}`} onClick={logout}>Logout</Button>
          </>
        ) : (
          <Button component={Link} to="/auth" variant="contained" className={`${classes.logout} ${classes.root}`}>Sign In</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;