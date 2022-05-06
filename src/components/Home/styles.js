import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBarSearch: {
    marginBottom: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    /* level 2 color */
    backgroundColor: '#262b33',
    borderRadius: 12,
    padding: theme.spacing(2),
  },
  pagination: {
    marginTop: '1rem',
    padding: '16px',
    marginBottom: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    /* level 2 color */
    backgroundColor: '#262b33',
    borderRadius: 12,
    padding: theme.spacing(2),
  },
  gridContainer: {
    marginLeft: '1rem',
    paddingRight: '4.7rem',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
      marginLeft: '0.5rem',
      paddingRight: '2rem',
    },
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
    '& .MuiInputLabel-root': {
      color: '#f2efda',
    },
    '& .MuiInputBase-root': {
      color: '#f2efda',
    },
    '&.MuiButtonBase-root:hover' : {
      backgroundColor: '#1260cc',
    },
    '& .MuiChip-root': {
      /* level 4 color */
      backgroundColor: '#4d5666',
    },
  },
  textfield: {
    backgroundColor: '#39404d',
    borderRadius: '4px',
    input: '#f2efda',
    width: '94%',
    margin: '8px 0',
    marginLeft: '8px',
  },
  searchButton: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#2273ff',
    width: '94%',
    textTransform: 'none',
    fontSize: '18px',
    marginLeft: '8px',
  },
}));