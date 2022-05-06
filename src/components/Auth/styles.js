import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(2),
    /* level 2 color */
    backgroundColor: '#262b33',
    borderRadius: 12,
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
    ' &.MuiButtonBase-root:hover' : {
      backgroundColor: '#1260cc',
    },
    '& .MuiInputBase-root:autofill': {
      backgroundColor: 'pink',
    },
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#1260cc',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#2273ff',
    textTransform: 'none',
    fontSize: '16px',
  },
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  textfield: {
    backgroundColor: '#39404d',
    borderRadius: '4px',
    input: '#f2efda',
  }
}));