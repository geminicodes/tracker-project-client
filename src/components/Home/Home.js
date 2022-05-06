import React, { useState } from 'react';
import { Container, Grow, Grid, AppBar, TextField, Button, Paper, Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import ChipInput from 'material-ui-chip-input';

import { getJobsBySearch } from '../../actions/jobs';
import Jobs from '../Jobs/Jobs'; 
import Form from '../Form/Form';
import Pagination from '../Pagination';
import useStyles from './styles';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const query = useQuery();
  const page = query.get('page') || 1;
  const searchQuery = query.get('searchQuery');

  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();

  const [search, setSearch] = useState('');
  const [tags, setTags] = useState([]);
  const history = useHistory();

  const searchJob = () => {
    if (search.trim() || tags) {
      dispatch(getJobsBySearch({ search, tags: tags.join(',') }));
      history.push(`/jobs/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
    } else {
      history.push('/');
    }
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      searchJob();
    }
  };

  const handleAddChip = (tag) => setTags([...tags, tag]);

  const handleDeleteChip = (chipToDelete) => setTags(tags.filter((tag) => tag !== chipToDelete));
  return (
    <Grow in>
      <Container maxWidth="xl">
        <Grid container  alignItems="stretch" spacing={3} className={classes.gridContainer}>
          
        <Grid item xs={12} sm={12} md={3}>
            <AppBar className={classes.appBarSearch} position="static" color="inherit">
              <TextField className={`${classes.textfield} ${classes.root}`} onKeyDown={handleKeyPress} name="search" variant="outlined" label="Search Jobs" fullWidth value={search} onChange={(e) => setSearch(e.target.value)} />
              <ChipInput
                className={`${classes.textfield} ${classes.root}`}
                
                value={tags}
                onAdd={(chip) => handleAddChip(chip)}
                onDelete={(chip) => handleDeleteChip(chip)}
                label="Search Tags"
                variant="outlined"
              />
              <Button onClick={searchJob} className={`${classes.searchButton} ${classes.root}`} variant="contained" color="primary">Search</Button>
            </AppBar>
            
            {(!searchQuery && !tags.length) && (
              <Paper className={classes.pagination} elevation={6}>
                <Pagination page={page} />
              </Paper>
            )}
            
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Jobs setCurrentId={setCurrentId} position="static" />
          </Grid>

          <Grid item xs={12} sm={12} md={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} position="static" />
          </Grid>

        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;