import PostMessage from '../models/postMessage.js';


// all handlers for routes
export const getPosts = async (req, res) => {
    try {
        const postMessages = await PostMessage.find();
        // sucessful request
        res.status(200).json(postMessages);

    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}


// CREATE POST FUNCTION
export const createPosts = async (req, res) => {
   const post = req.body;

   const newPost = new PostMessage(post);

    try {
        // asynchronous
        await newPost.save();
        // successful creation
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}