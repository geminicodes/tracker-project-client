import React, { useEffect } from 'react';
import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core/';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getJob, getJobsBySearch } from '../../actions/jobs';
import useStyles from './styles';

const Job = () => {
  const { job, jobs, isLoading } = useSelector((state) => state.jobs);
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getJob(id));
  }, [id]);

  useEffect(() => {
    if (job) {
      dispatch(getJobsBySearch({ search: 'none', tags: job?.tags.join(',') }));
    }
  }, [job]);

  if (!job) return null;

  const openJob = (_id) => history.push(`/jobs/${_id}`);

  if (isLoading) {
    return (
      <Paper elevation={6} className={classes.loadingPaper}>
        <CircularProgress size="7em" />
      </Paper>
    );
  }

  const recommendedJobs = jobs.filter(({ _id }) => _id !== job._id);

  return (
    <Paper style={{ padding: '20px', borderRadius: '15px' }} elevation={6}>
      <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{job.title}</Typography>
          <Typography gutterBottom variant="h6" color="textSecondary" component="h2">{job.tags.map((tag) => `#${tag} `)}</Typography>
          <Typography variant="h6">{job.companyName}</Typography>
          <Typography variant="h6">{job.status}</Typography>
          <Typography variant="h6">{job.jobUrl}</Typography>
          <Typography gutterBottom variant="body1" component="p">{job.notes}</Typography>
          <Typography variant="h6">Created by: {job.name}</Typography>
          <Typography variant="body1">{moment(job.createdAt).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
        </div>
      </div>
      {!!recommendedJobs.length && (
        <div className={classes.section}>
          <Typography gutterBottom variant="h5">You might also like:</Typography>
          <Divider />
          <div className={classes.recommendedJobs}>
            {recommendedJobs.map(({ title, name, notes, likes, companyName, status, jobUrl, _id }) => (
              <div style={{ margin: '20px', cursor: 'pointer' }} onClick={() => openJob(_id)} key={_id}>
                <Typography gutterBottom variant="h6">{title}</Typography>
                <Typography gutterBottom variant="subtitle2">{name}</Typography>
                <Typography gutterBottom variant="subtitle2">{companyName}</Typography>
                <Typography gutterBottom variant="subtitle2">{status}</Typography>
                <Typography gutterBottom variant="subtitle2">{jobUrl}</Typography>
                <Typography gutterBottom variant="subtitle2">{notes}</Typography>
                <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
              </div>
            ))}
          </div>
        </div>
      )}
    </Paper>
  );
};

export default Job;