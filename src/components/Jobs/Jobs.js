import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Job from './Job/Job';
import useStyles from './styles';

const Jobs = ({ setCurrentId }) => {
  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const classes = useStyles();

  if (!jobs.length && !isLoading) return 'Add a job.';

  return (
    isLoading ? <div className={classes.isLoading}><h2>Demo Version</h2><br/><CircularProgress /></div> : (
      <Grid className={classes.container} container alignItems="stretch" spacing={3}>
        {jobs?.map((job) => (
          <Grid key={job._id} item xs={12} sm={12} md={6} lg={6}>
            <Job job={job} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Jobs;