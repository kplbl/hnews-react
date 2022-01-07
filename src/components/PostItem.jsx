import Timeago from 'react-timeago';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function PostItem({ post }) {
  const { title, by, id, score, url, time, descendants } = post;

  const navigate = useNavigate();

  let domain = null;
  try {
    let { hostname } = new URL(url);
    domain = hostname;
  } catch (error) {
    domain = null;
  }

  return (
    <div
      className="block mb-2 text-gray-700  p-1 hover:bg-slate-200"
      onClick={() => navigate(`/post/${id}`)}
    >
      <div>
        <span className="font-semibold mr-5">{title}</span>
        {domain && (
          <span className="text-sm">
            <a href={url}>({domain})</a>
          </span>
        )}
      </div>
      <div className="text-sm">
        {score} points by <Link to={`/user/${by}`}>{by}</Link> <Timeago date={time * 1000} />
        {' | '}
        {descendants && <span>{descendants} comments</span>}
      </div>
    </div>
  );
}

export default PostItem;
