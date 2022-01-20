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
        className="text-2xl text-orange-700 font-bold mr-5 px-2"
      >
        HN
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
            className={`navbar-link mb-0  px-2  ${
              location.pathname === '/new' ? 'text-orange-700' : ''
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
            className={`navbar-link mb-0  px-2  ${
              location.pathname === '/best' ? 'text-orange-700' : ''
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
            className={`navbar-link mb-0  px-2 ${
              location.pathname === '/top' ? 'text-orange-700' : ''
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
            className={`navbar-link mb-0  px-2  ${
              location.pathname === '/ask' ? 'text-orange-700' : ''
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
            className={`navbar-link mb-0 px-2  ${
              location.pathname === '/show' ? 'text-orange-700' : ''
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
            className={`navbar-link mb-0  px-2 ${
              location.pathname === '/jobs' ? 'text-orange-700' : ''
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
            className={`navbar-link mb-0  px-2 ${
              location.pathname === '/submit' ? 'text-orange-700' : ''
            }`}
          >
            submit
          </Link>
        </div>

        <Link
          to="/login"
          className={`navbar-link px-2  ${location.pathname === '/login' ? 'text-orange-700' : ''}`}
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
