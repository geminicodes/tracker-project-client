import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
//import FileBase from 'react-file-base64';
import { useHistory } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { createJob, updateJob } from '../../actions/jobs';
import useStyles from './styles';

const Form = ({ currentId, setCurrentId }) => {
  const [jobData, setJobData] = useState({ title: '', companyName: '', jobUrl: '', status: '', notes: '', tags: [] });
  const job = useSelector((state) => (currentId ? state.jobs.jobs.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem('profile'));
  const history = useHistory();

  const clear = () => {
    setCurrentId(0);
    setJobData({ title: '', companyName: '', jobUrl: '', status: '', notes: '', tags: [], });
  };

  useEffect(() => {
    if (!job?.title) clear();
    if (job) setJobData(job);
  }, [job]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId === 0) {
      dispatch(createJob({ ...jobData, name: user?.result?.name }, history));
      clear();
    } else {
      dispatch(updateJob(currentId, { ...jobData, name: user?.result?.name }));
      clear();
    }
  };

  if (!user?.result?.name) {
    return (
      <Paper className={classes.paper} elevation={6}>
        <Typography variant="h6" align="center">
          Sign In to track your job search.
        </Typography>
      </Paper>
    );
  }

  const handleAddChip = (tag) => {
    setJobData({ ...jobData, tags: [...jobData.tags, tag] });
  };

  const handleDeleteChip = (chipToDelete) => {
    setJobData({ ...jobData, tags: jobData.tags.filter((tag) => tag !== chipToDelete) });
  };

  return (
    <Paper className={classes.paper} elevation={6}>
      <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography variant="h6">{currentId ? `Editing "${job?.title}"` : 'Creating a Job'}</Typography>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={jobData.title} onChange={(e) => setJobData({ ...jobData, title: e.target.value })} />
        <TextField name="companyName" variant="outlined" label="Company Name" fullWidth value={jobData.companyName} onChange={(e) => setJobData({ ...jobData, companyName: e.target.value })} />
        <TextField name="jobUrl" variant="outlined" label="Job Url" fullWidth value={jobData.jobUrl} onChange={(e) => setJobData({ ...jobData, jobUrl: e.target.value })} />
        <TextField name="status" variant="outlined" label="Application Status" fullWidth value={jobData.status} onChange={(e) => setJobData({ ...jobData, status: e.target.value })} />
        <TextField name="notes" variant="outlined" label="Notes" fullWidth multiline rows={4} value={jobData.notes} onChange={(e) => setJobData({ ...jobData, notes: e.target.value })} />
        <div style={{ padding: '5px 0', width: '94%' }}>
          <ChipInput
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={jobData.tags}
            onAdd={(chip) => handleAddChip(chip)}
            onDelete={(chip) => handleDeleteChip(chip)}
          />
        </div>
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
      </form>
    </Paper>
  );
};

export default Form;