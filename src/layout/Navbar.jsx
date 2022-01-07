import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2 py-5">
        <Link to="/" className="text-lg mr-5">
          Hacker News
        </Link>

        <Link to="/new" className="navbar-link">
          new
        </Link>
        <Link to="/past" className="navbar-link">
          past
        </Link>
        <Link to="/newcomments" className="navbar-link">
          comments
        </Link>
        <Link to="/ask" className="navbar-link">
          ask
        </Link>
        <Link to="/show" className="navbar-link">
          show
        </Link>
        <Link to="/jobs" className="navbar-link">
          jobs
        </Link>
        <Link to="/submit" className="navbar-link">
          submit
        </Link>
      </div>
      <Link to="/login" className="py-5 navbar-link">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
