/* 
  Start here and work your way down the nested components.
  Not all files in the project need code added.
  Look at each file to see what props need to be passed!
*/

// Import the state hook
import React, { useState } from 'react';
// Import the Posts (plural!) and SearchBar components, since they are used inside App component
import Posts from './components/Posts/Posts';
import SearchBar from './components/SearchBar/SearchBar';

// Import the dummyData
import dummyData from './dummy-data';

import './App.css';

const App = () => {
  // Create a state called `posts` to hold the array of post objects, **initializing to dummyData**.
  // This state is the source of truth for the data inside the app. You won't be needing dummyData anymore.
  // To make the search bar work (which is stretch) we'd need another state to hold the search term.

  const [posts, setPosts] = useState(dummyData); // Passing in a state variable and a way to update that state variable (posts, setPosts)
// Never mutate state directly!
// setPosts(newPosts); will work! Updating posts will re-render the JSX (the returned data at the bottom)

  const likePost = postId => {
    /*
      This function serves the purpose of increasing the number of likes by one, of the post with a given id.

      The state of the app lives at the top of the React tree, but it wouldn't be fair for nested components not to be able to change state!
      This function is passed down to nested components through props, allowing them to increase the number of likes of a given post.

      Invoke `setPosts` and pass as the new state the invocation of `posts.map`.
      The callback passed into `map` performs the following logic:
        - if the `id` of the post matches `postId`, return a new post object with the desired values (use the spread operator).
        - otherwise just return the post object unchanged.
     */
    const updatedPosts = posts.map(post => {
      if (post.id === postId) {
        return {...post, likes: post.likes + 1}
      } else {
        return post;
      }
    })
    setPosts(updatedPosts);
  };
  /* Higher order functions
  map: loops over an array and changes something of each element. returns a new array
  filter: loops over an array and adds elements to a new array if they pass a condition
  reduce: loops over an array and reduce it to a singular value
  find: loops over an array and based on a condition, will return the first element of that array
  
  */

  return (
    <div className='App'>
      {/* Add SearchBar and Posts here to render them */}
      {/* All tags have to be explicitly closed, aka with /> 
      posts={} : Posts is the key, whatever is in brackets will be the value 
      const props = {
        posts: posts,            We are running this function and passing in props object
        likePost: likePost
      } */}
      <SearchBar />
      <Posts posts={posts} likePost={likePost} />
      {/* Check the implementation of each component, to see what props they require, if any! */}
    </div>
  );
};

export default App;
