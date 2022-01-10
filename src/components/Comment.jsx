import axios from 'axios';
import Timeago from 'react-timeago';
import { useState, useEffect } from 'react';
import Loading from './Loading';
import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

function Comment({ comment, isChild = false }) {
  const [comments, setComments] = useState();
  const [loading, setLoading] = useState(true);
  const { by, text, time, kids } = comment;

  const getComments = async (kids) => {
    setLoading(true);
    setComments([]);
    let response = null;

    try {
      kids.forEach(async (kid) => {
        response = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${kid}.json`);
        setComments((prevState) => [...prevState, response.data]);
        setLoading(false);
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    kids && getComments(kids);
  }, []);

  return (
    <div className={`my-3 ${isChild && 'ml-10'}`}>
      <div className="comment-text mb-1 text-gray-800 text-sm ">
        {parse(DOMPurify.sanitize(text, { USE_PROFILES: { html: true } }))}
      </div>
      <div className="text-xs text-gray-500">
        <Link to={`/user/${by}`}>{by}</Link> | <Timeago date={time * 1000} />
      </div>
      {kids && (
        <>
          {loading ? (
            <Loading />
          ) : comments ? (
            comments.map((child) => <Comment key={child.id} comment={child} isChild={true} />)
          ) : null}{' '}
        </>
      )}
    </div>
  );
}

export default Comment;
