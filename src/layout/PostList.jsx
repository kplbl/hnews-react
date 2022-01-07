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
      let subset = response.data.slice(page * 10, page * 10 + 10);

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
  }, [type, page]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        {posts.map((post) => (
          <PostItem post={post} key={post.id} />
        ))}
      </div>
      <div>
        <button
          onClick={() => setPage(0)}
          className={`text-lg px-4 py-1 border rounded-sm mr-5 ${page === 0 && 'hidden'}`}
        >
          Top
        </button>
        <button
          onClick={() => page && setPage(page - 1)}
          className={`text-lg px-4 py-1 border rounded-sm  ${page === 0 && 'hidden'}`}
        >
          Prev
        </button>
        <span className={`text-lg mx-5 ${page === 0 && 'hidden'}`}>{page > 0 && `${page}`}</span>

        <button onClick={() => setPage(page + 1)} className="text-lg px-4 py-1 border rounded-sm ">
          Next
        </button>
      </div>
    </>
  );
};

export default PostList;
