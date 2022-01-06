import { Link } from 'react-router-dom';
function PostItem({ post }) {
  const { title, by, id, score, url } = post;

  console.log(post);
  return (
    <div className="block">
      <div>
        <span>{title}</span>
        <span>{post.url}</span>
      </div>
      <div>{post.score}</div>
    </div>
  );
}

export default PostItem;
