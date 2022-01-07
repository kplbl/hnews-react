import axios from 'axios';
import { useState, useEffect } from 'react';
import PostItem from '../components/PostItem';
import Loading from '../components/Loading';

// post types: newstories

const PostList = ({ type }) => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  const getPosts = async (type, page) => {
    setPosts([]);
    setLoading(true);
    try {
      let response = await axios.get(`https://hacker-news.firebaseio.com/v0/${type}.json`);
      let subset = [];

      for (let i = page * 10; i < page * 10 + 10; i++) {
        subset.push(response.data[i]);
      }

      subset.forEach(async (id) => {
        response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
        setPosts((prevState) => [...prevState, response.data]);
      });
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts(type, page);
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {posts.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
