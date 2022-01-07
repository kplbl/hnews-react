import DOMPurify from 'dompurify';
import parse from 'html-react-parser';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function User() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://hacker-news.firebaseio.com/v0/user/${params.userId}.json`
      );
      setUser(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (loading) {
    return <Loading />;
  }

  const created = new Date(user.created * 1000).toLocaleString();

  const cleanHTML = DOMPurify.sanitize(user.about, { USE_PROFILES: { html: true } });

  return (
    <div>
      <div>user: {user.id}</div>
      <div>created: {created}</div>
      <div>karma: {user.karma}</div>
      <div>
        <div>about:</div>
        <div>{parse(cleanHTML)}</div>
      </div>
    </div>
  );
}

export default User;
