import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <header className="">
    <NavLink to="/">
      <div className="see-all-container">
        <IoChevronBack className="arrow-left" />
        <p>See all</p>
      </div>
    </NavLink>
    <h1 className="main-title">Country Info</h1>
    <div className="icons-container">
      <FaMicrophone />
      <IoMdSettings />
    </div>
  </header>
);

export default Navbar;
