import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 12,
    marginTop: '6rem',
    marginBottom: '1rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px',
    bottom: '0px',
    width: '96%',
    /* level 2 color */
    backgroundColor: '#262b33',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      paddingBottom: '10px',
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'space-between',
    [theme.breakpoints.down('sm')]: {
      width: 'auto',
    },
  },
  link: {
      paddingLeft: '5px',
      paddingRight: '5px',
  }
}));