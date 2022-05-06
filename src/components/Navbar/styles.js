import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  root: {
    ' &.MuiButtonBase-root:hover' : {
      backgroundColor: '#1260cc',
    }
  },
  appBar: {
    borderRadius: 12,
    margin: '20px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '2px 50px',
    /* level 2 color */
    backgroundColor: '#262b33',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingBottom: '10px',
    },
  },
  heading: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    fontSize: '1.1em',
    paddingTop: '10px',
    marginLeft: 'none',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.7em',
      marginBottom: 'none',
    },
  },
  image: {
    marginTop: '8px',
    marginRight: '16px',
    marginBottom: '10px',
    [theme.breakpoints.down('sm')]: {
      height: '25px',
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
    width: '200px',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
      marginTop: 10,
      justifyContent: 'center',
    },
  },
  logout: {
    marginLeft: '20px',
    textTransform: 'none',
    backgroundColor: '#2273ff',
    fontSize: '18px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    paddingLeft: '10px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    height: '30px',
    width: '30px',
  },
}));