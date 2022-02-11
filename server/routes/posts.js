import express from 'express';

import { getPosts, createPosts } from '../controllers/posts.js';

const router = express.Router();


// http://localhost:5000/posts
// callback function inside router.get
router.get('/', getPosts );
router.post('/', createPosts );












export default router;