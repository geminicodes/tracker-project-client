import React from 'react';
import { Card, CardActions, CardContent, Button, Typography, ButtonBase } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import ThumbUpAltOutlined from '@material-ui/icons/ThumbUpAltOutlined';
import InfoIcon from '@material-ui/icons/Info';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

//import { getPost, likePost, deletePost } from '../../../actions/posts';
import { likeJob, deleteJob } from '../../../actions/jobs';
import useStyles from './styles';

const Job = ({ job, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const Likes = () => {
    if (job?.likes?.length > 0) {
      return job.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
        ? (
          <><ThumbUpAltIcon fontSize="small" />&nbsp;{job.likes.length > 2 ? `You and ${job.likes.length - 1} others` : `${job.likes.length} like${job.likes.length > 1 ? 's' : ''}` }</>
        ) : (
          <><ThumbUpAltOutlined fontSize="small" />&nbsp;{job.likes.length} {job.likes.length === 1 ? 'Like' : 'Likes'}</>
        );
    }

    return <><ThumbUpAltOutlined fontSize="small" />&nbsp;Like</>;
  };

  const openJob = (e) => {
    // dispatch(getPost(post._id, history));

    history.push(`/jobs/${job._id}`);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <ButtonBase
        component="span"
        name="test"
        className={classes.cardAction}
        onClick={openJob}
      >
        <div className={classes.overlay}>
          <Typography variant="h6">{job.name}</Typography>
          <Typography variant="body2">{moment(job.createdAt).fromNow()}</Typography>
        </div>
        {(user?.result?.googleId === job?.creator || user?.result?._id === job?.creator) && (
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
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">{job.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{job.companyName}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{job.jobUrl}</Typography>
          <Typography variant="body2" color="textSecondary" component="h2">{job.status}</Typography>
        </div>
        <Typography className={classes.title} gutterBottom variant="h5" component="h2">{job.title}</Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">{job.notes.split(' ').splice(0, 20).join(' ')}...</Typography>
        </CardContent>
      </ButtonBase>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" disabled={!user?.result} onClick={() => dispatch(likeJob(job._id))}>
          <Likes />
        </Button>
        {(user?.result?.googleId === job?.creator || user?.result?._id === job?.creator) && (
          <Button size="small" color="secondary" onClick={() => dispatch(deleteJob(job._id))}>
            <DeleteIcon fontSize="small" /> &nbsp; Delete
          </Button>
        )}
      </CardActions>
    </Card>
  );
};

export default Job;