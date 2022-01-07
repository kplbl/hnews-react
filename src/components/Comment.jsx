import axios from 'axios';
import Timeago from 'react-timeago';
import { useState, useEffect } from 'react';
import Loading from './Loading';

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
    console.log('kids ', kids);
    kids && getComments(kids);
  }, []);

  return (
    <div className={`my-3 ${isChild && 'ml-10'}`}>
      <div className="mb-1 text-sm bg-gray-100">{text}</div>
      <div className="text-xs font-medium">
        {by} <Timeago date={time * 1000} />
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
