import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

const Navbar = ({ setPage }) => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between border-b-black border-b mb-2 mt-0 md:mt-4">
      <Link
        to="/"
        onClick={() => {
          setOpen(false);
          setPage(0);
        }}
        className="text-lg font-bold mr-5   px-2 border-b-4 border-b-orange-500 bg-orange-500"
      >
        Hacker News <span className="italic text-orange-200">lurker</span>
      </Link>

      <div className="md:hidden mr-4" onClick={() => setOpen(!open)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </div>

      <div
        className={`w-full md:flex md:items-center md:w-auto flex-grow justify-between ${
          open ? '' : 'hidden'
        } `}
      >
        <div className="flex flex-col md:flex-row">
          <Link
            to="/new"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0  px-2  border-b-4  ${
              location.pathname === '/new' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            new
          </Link>
          <Link
            to="/best"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0  px-2 border-b-4  ${
              location.pathname === '/best' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            best
          </Link>
          <Link
            to="/top"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0  px-2 border-b-4  ${
              location.pathname === '/top' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            top
          </Link>
          <Link
            to="/ask"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0  px-2 border-b-4  ${
              location.pathname === '/ask' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            ask
          </Link>
          <Link
            to="/show"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0 px-2 border-b-4  ${
              location.pathname === '/show' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            show
          </Link>
          <Link
            to="/jobs"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0  px-2 border-b-4  ${
              location.pathname === '/jobs' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            jobs
          </Link>
          <Link
            to="/submit"
            onClick={() => {
              setOpen(!open);
              setPage(0);
            }}
            className={`navbar-link mb-0  px-2 border-b-4  ${
              location.pathname === '/submit' ? 'border-b-orange-500' : 'border-b-white'
            }`}
          >
            submit
          </Link>
        </div>

        <Link
          to="/login"
          className={`navbar-link mb-0 px-2   border-b-4  ${
            location.pathname === '/login' ? 'border-b-orange-500' : 'border-b-white'
          }`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
