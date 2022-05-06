import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  fullHeightCard: {
    height: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    position: 'relative',
    /* level 2 color */
    backgroundColor: '#262b33',
    borderRadius: 12,
  },
  cardContent: {
    /* level 3 color */
    backgroundColor: '#39404d',
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    margin: '2rem',
    marginTop: '0rem',
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardButtons: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'space-between',
    marginLeft: '0.5rem',
  },
  overlay2: {
    position: 'absolute',
    top: '30px',
    right: '30px',
    color: 'white',
    alignItems: 'center',
  },
  cardActions: {
    justifyContent: 'space-between',
  },
  
});