import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Timeago from 'react-timeago';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import Loading from './Loading';
import Comment from './Comment';

function Post({}) {
  const [comments, setComments] = useState(null);
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const { postId } = useParams();

  // const {title, by, id, score, url, time, descendants} = post

  let domain = null;
  let cleanHTML = null;

  const getPostAndComments = async (postId) => {
    setPost([]);
    setComments([]);

    setLoading(true);
    try {
      let response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${postId}.json`);

      setPost(response.data);

      response.data.kids &&
        response.data.kids.forEach(async (comment) => {
          response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${comment}.json`);
          setComments((prevState) => [...prevState, response.data]);
        });

      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostAndComments(postId);

    try {
      let { hostname } = new URL(url);
      domain = hostname;
    } catch (error) {
      domain = null;
    }
  }, []);

  if (post.text) {
    cleanHTML = DOMPurify.sanitize(post.text, { USE_PROFILES: { html: true } });
  }

  if (loading) {
    return <Loading />;
  }

  if (!post) {
    return <div>Error, no post</div>;
  }

  return (
    <>
      <div className="block">
        <div>
          <span className="font-semibold mr-5">{post.title}</span>
          {domain && (
            <span className="text-sm">
              <a href={post.url}>({domain})</a>
            </span>
          )}
        </div>
        {post.text && <div className="text-sm p-1 my-1">{parse(cleanHTML)}</div>}

        <div className="text-sm">
          {post.score} points by <Link to={`/user/${post.by}`}>{post.by}</Link>{' '}
          <Timeago date={post.time * 1000} />
          {' | '}
          {post.descendants && <span>{post.descendants} comments</span>}
        </div>
        <div>
          {comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Post;
