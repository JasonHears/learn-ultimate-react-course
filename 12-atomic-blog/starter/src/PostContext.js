import { createContext, useContext, useMemo, useState } from "react";
import { faker } from "@faker-js/faker";

// 1. Create new context
const PostContext = createContext();

function PostProvider({ children }) {
  // generates 30 random posts as the initial post state

  /**
   * Calls Faker to generate randome content
   * @returns object containint title and body of a random post
   */
  function createRandomPost() {
    return {
      title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
      body: faker.hacker.phrase(),
    };
  }

  const [posts, setPosts] = useState(() =>
    Array.from({ length: 30 }, () => createRandomPost())
  );

  const [searchQuery, setSearchQuery] = useState("");

  // Derived state. These are the posts that will actually be displayed
  // filters posts to those that match the searchQuery (if length > 0)
  const searchedPosts =
    searchQuery.length > 0
      ? posts.filter((post) =>
          `${post.title} ${post.body}`
            .toLowerCase()
            .includes(searchQuery.toLowerCase())
        )
      : posts;

  /**
   * Add post object to state posts array
   * @param {Post} post
   */
  function handleAddPost(post) {
    setPosts((posts) => [post, ...posts]);
  }

  /**
   * Clears all posts from state posts array
   */
  function handleClearPosts() {
    setPosts([]);
  }

  const value = useMemo(() => {
    return {
      posts: searchedPosts,
      onAddPost: handleAddPost,
      onClearPosts: handleClearPosts,
      // the follow should be separate "search" context, but combining for ease of learning
      searchQuery,
      setSearchQuery,
    };
  }, [searchQuery, setSearchQuery, searchedPosts]);

  return (
    <PostContext.Provider value={value}>
      {/* 2. Provide values to child components */}
      {children}
    </PostContext.Provider>
  );
}

function usePosts() {
  const context = useContext(PostContext);
  if (context === undefined)
    throw new Error("PostContext was used outside the PostProvider");
  return context;
}

export { PostProvider, usePosts };
