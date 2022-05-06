import { FETCH_ALL, FETCH_BY_SEARCH, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';

export default (state = { isLoading: true, jobs: [] }, action) => {
  switch (action.type) {
    case 'START_LOADING':
      return { ...state, isLoading: true };
    case 'END_LOADING':
      return { ...state, isLoading: false };
    case FETCH_ALL:
      return {
        ...state,
        jobs: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case FETCH_BY_SEARCH:
      return { ...state, jobs: action.payload.data };
    case LIKE:
      return { ...state, jobs: state.jobs.map((job) => (job._id === action.payload._id ? action.payload : job)) };
    case CREATE:
      return { ...state, jobs: [...state.jobs, action.payload] };
    case UPDATE:
      return { ...state, jobs: state.jobs.map((job) => (job._id === action.payload._id ? action.payload : job)) };
    case DELETE:
      return { ...state, jobs: state.jobs.filter((job) => job._id !== action.payload) };
    default:
      return state;
  }
};