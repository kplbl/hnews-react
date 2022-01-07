import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex justify-between border-b-black border-b mb-2 mt-4">
      <div className="flex gap-2 py-0">
        <Link to="/" className="text-lg font-bold mr-5 py-2 bg-orange-500 px-2">
          Hacker News <span className="font-light italic text-gray-700">lurker</span>
        </Link>

        <Link to="/new" className="navbar-link py-2">
          new
        </Link>
        <Link to="/best" className="navbar-link py-2">
          best
        </Link>
        <Link to="/top" className="navbar-link py-2">
          top
        </Link>
        <Link to="/ask" className="navbar-link py-2">
          ask
        </Link>
        <Link to="/show" className="navbar-link py-2">
          show
        </Link>
        <Link to="/jobs" className="navbar-link py-2">
          jobs
        </Link>
        <Link to="/submit" className="navbar-link py-2">
          submit
        </Link>
      </div>
      <Link to="/login" className="py-2 navbar-link">
        Login
      </Link>
    </nav>
  );
};

export default Navbar;
