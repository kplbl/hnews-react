import { Link, useLocation } from 'react-router-dom';

const Navbar = (props) => {
  const location = useLocation();

  return (
    <nav className="flex justify-between border-b-black border-b mb-2 mt-4">
      <div className="flex py-0">
        <Link
          to="/"
          className={`text-lg font-bold mr-5 py-2 px-2 ${
            location.pathname === '/' ? 'bg-orange-500' : 'bg-orange-400'
          }`}
        >
          Hacker News <span className="italic text-orange-200">lurker</span>
        </Link>

        <Link
          to="/new"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/new' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          new
        </Link>
        <Link
          to="/best"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/best' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          best
        </Link>
        <Link
          to="/top"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/top' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          top
        </Link>
        <Link
          to="/ask"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/ask' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          ask
        </Link>
        <Link
          to="/show"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/show' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          show
        </Link>
        <Link
          to="/jobs"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/jobs' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          jobs
        </Link>
        <Link
          to="/submit"
          className={`navbar-link py-2 px-2 border-b-4  ${
            location.pathname === '/submit' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          submit
        </Link>
      </div>
      <Link
        to="/login"
        className={`navbar-link py-2 border-b-4  ${
          location.pathname === '/login' ? 'border-b-orange-500' : 'border-b-white'
        }`}
      >
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
