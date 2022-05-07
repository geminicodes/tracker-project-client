import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, Link} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import { likeJob, deleteJob } from '../../../actions/jobs';
import useStyles from './styles';

const Job = ({ job, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const Likes = () => {
    if (job?.likes?.length > 0) {
      return job.likes.find((like) => like === ( user?.result?._id))
        ? (
          <FavoriteIcon fontSize="medium" />
        ) : (
          <FavoriteBorderIcon fontSize="medium" />
        );
    }

    return <FavoriteBorderIcon fontSize="medium" />;
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      
        <CardContent className={classes.cardButtons}>
          {(user?.result?._id === job?.creator) && (
          <div className={classes.overlay2} name="edit">
            <Button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentId(job._id);
              }}
              style={{ color: 'white' }}
              size="small"
            >
              <MoreHorizIcon fontSize="default" />
            </Button>
          </div>
          )}

          <CardActions className={classes.cardActions}>
            
            {(user?.result?._id === job?.creator) && (
              <Button size="small" color="secondary" onClick={() => dispatch(deleteJob(job._id))}>
                <DeleteIcon fontSize="medium" />
              </Button>
            )}
            <Button size="medium" color="primary" disabled={!user?.result} onClick={() => dispatch(likeJob(job._id))}>
              <Likes />
            </Button>
          </CardActions>
        </CardContent>
        
        <CardContent className={classes.cardContent}>
          <Typography component="h2">{job.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography variant="h5" component="h3">{job.title}</Typography>
          <Typography gutterBottom color='textSecondary'>{moment(job.createdAt).fromNow()}</Typography>
          <Typography component="h2">{job.companyName}</Typography>
          <a href={job.jobUrl} target='_blank' rel='noreferrer noopener'>Job Url</a> <br/>
          <Typography component="h2">{job.status}</Typography>
        </CardContent>
    </Card>
  );
};

export default Job;