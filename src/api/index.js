import axios from 'axios';
//import { updatePost } from '../../../server/controllers/posts';
const API = axios.create({ baseURL: 'http://localhost:4000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}` 
    }
    return req;
});

export const fetchPosts = () => axios.get('/posts');
export const createPost = (newPost) => axios.post('/posts', newPost);
export const updatePost = (id, updatedPost) => axios.patch(`/posts/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`/posts/${id}`);
export const likePost = (id) => axios.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);