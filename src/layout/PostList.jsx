import axios from 'axios';
import { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import Loading from '../components/Loading';

const PostList = ({ type, page, setPage }) => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const getPosts = async (type, page) => {
    setLoading(true);
    try {
      let response = await axios.get(`https://hacker-news.firebaseio.com/v0/${type}.json`);
      let subset = response.data.slice(page * 20, page * 20 + 20);

      subset.forEach(async (id) => {
        response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        setPosts((prevState) => {
          return [...new Set([...prevState, response.data])];
        });
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (page === 0) {
      setPosts([]);
    }
    getPosts(type, page);
  }, [page, type]);

  if (loading && posts.length === 0) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col-reverse md:flex-col">
      <div>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default PostList;
