const POSTS_KEY = "facebook_clone_posts";
const USER_KEY = "facebook_clone_user";

export const storageService = {
  // Posts
  getPosts: () => {
    const posts = localStorage.getItem(POSTS_KEY);
    return posts ? JSON.parse(posts) : [];
  },

  addPost: (post) => {
    const posts = storageService.getPosts();
    const newPost = {
      id: Date.now().toString(),
      data: {
        ...post,
        timestamp: new Date().toISOString(),
      },
    };
    localStorage.setItem(POSTS_KEY, JSON.stringify([newPost, ...posts]));
    window.dispatchEvent(new Event("postsUpdated"));
    return newPost;
  },

  deletePost: (postId) => {
    const posts = storageService.getPosts();
    const updatedPosts = posts.filter((post) => post.id !== postId);
    localStorage.setItem(POSTS_KEY, JSON.stringify(updatedPosts));
    window.dispatchEvent(new Event("postsUpdated"));
  },

  // User
  getUser: () => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  setUser: (user) => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  },

  removeUser: () => {
    localStorage.removeItem(USER_KEY);
  },
};
