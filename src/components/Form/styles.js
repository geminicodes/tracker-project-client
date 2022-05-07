import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
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
  paper: {
    padding: theme.spacing(2),
    /* level 2 color */
    backgroundColor: '#262b33',
    borderRadius: 12,
    marginBottom: '10px',
  },
  form: {
    display: 'flex', 
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  textfield: {
    backgroundColor: '#39404d',
    borderRadius: '4px',
    input: '#f2efda',
  },
  buttonSubmit: {
    marginBottom: 10,
    marginTop: 10,
    backgroundColor: '#2273ff',
    width: '94%',
    textTransform: 'none',
    fontSize: '18px',
  },
}));