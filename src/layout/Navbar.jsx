import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav className="flex justify-between">
      <div className="flex gap-2 py-5">
        <div className="text-lg mr-5">Hacker News</div>

        <div className="navbar-link">new</div>
        <div className="navbar-link">past</div>
        <div className="navbar-link">comments</div>
        <div className="navbar-link">ask</div>
        <div className="navbar-link">show</div>
        <div className="navbar-link">jobs</div>
        <div className="navbar-link">submit</div>
      </div>
      <div className="py-5 navbar-link">Login</div>
    </nav>
  );
};

export default Navbar;
