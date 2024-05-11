import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../Context/AuthProvider";
import { Tooltip } from "react-tooltip";


const NavigationBar = () => {
  const {user, logOut} = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
        .then()
        .catch()
}
  return (
    <div className="navbar bg-base-100 mt-10 mx-auto container ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[3] p-2 shadow bg-base-100 rounded-box w-52 text-xl font-semibold">
            <NavLink
              to="/"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#e4bb55" : "",
                  color: isActive ? "#32474c" : "#020617",
                  padding: isActive ? "5px" : "",
                  borderRadius: isActive ? "8px" : ""
                };
              }}
            >
              <li><a>Home</a></li>
            </NavLink>
            <NavLink to="/add-blog"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#e4bb55" : "",
                  color: isActive ? "#32474c" : "#020617",
                  padding: isActive ? "5px" : "",
                  borderRadius: isActive ? "8px" : ""
                };
              }}
            ><li><a>Add Blog</a></li></NavLink>
            <NavLink to="/all-blogs"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#e4bb55" : "",
                  color: isActive ? "#32474c" : "#020617",
                  padding: isActive ? "5px" : "",
                  borderRadius: isActive ? "8px" : ""
                };
              }}
            ><li><a>All blogs</a></li></NavLink>
            <NavLink to="/featured-blogs"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#e4bb55" : "",
                  color: isActive ? "#32474c" : "#020617",
                  padding: isActive ? "5px" : "",
                  borderRadius: isActive ? "8px" : ""
                };
              }}
            ><li><a>Featured Blogs</a></li></NavLink>
            <NavLink to="/wishlist"
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#e4bb55" : "",
                  color: isActive ? "#32474c" : "#020617",
                  padding: isActive ? "5px" : "",
                  borderRadius: isActive ? "8px" : ""
                };
              }}
            ><li><a> Wishlist</a></li></NavLink>
          </ul>
        </div>
        <img className="w-40 h-40" src={"/logo1.png"} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-xl font-semibold">
          <NavLink
            to="/"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#e4bb55" : "",
                color: isActive ? "#32474c" : "#020617",
                padding: isActive ? "5px" : "",
                borderRadius: isActive ? "8px" : ""
              };
            }}
          >
            <li><a>Home</a></li>
          </NavLink>
          <NavLink to="/add-blog"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#e4bb55" : "",
                color: isActive ? "#32474c" : "#020617",
                padding: isActive ? "5px" : "",
                borderRadius: isActive ? "8px" : ""
              };
            }}
          ><li><a>Add Blog</a></li></NavLink>
          <NavLink to="/all-blogs"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#e4bb55" : "",
                color: isActive ? "#32474c" : "#020617",
                padding: isActive ? "5px" : "",
                borderRadius: isActive ? "8px" : ""
              };
            }}
          ><li><a>All blogs</a></li></NavLink>
          <NavLink to="/featured-blogs"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#e4bb55" : "",
                color: isActive ? "#32474c" : "#020617",
                padding: isActive ? "5px" : "",
                borderRadius: isActive ? "8px" : ""
              };
            }}
          ><li><a>Featured Blogs</a></li></NavLink>
          <NavLink to="/wishlist"
            style={({ isActive }) => {
              return {
                backgroundColor: isActive ? "#e4bb55" : "",
                color: isActive ? "#32474c" : "#020617",
                padding: isActive ? "5px" : "",
                borderRadius: isActive ? "8px" : ""
              };
            }}
          ><li><a> Wishlist</a></li></NavLink>
        </ul>
      </div>
      <div className="navbar-end"> {
        user ?
          <>
            <a
              data-tooltip-id="my-tooltip-inline"
              data-tooltip-content={user.displayName}
            >
              <div className="avatar online mr-5">
                <div className="w-16 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </a>
            <Tooltip
              id="my-tooltip-inline"
              style={{ backgroundColor: "#113065", color: "#fff" }}
            />

            <a onClick={handleSignOut} className="btn bg-[#e4bb55] text-[#0e191b]">Log Out</a>
          </>

          :
          <>
            <Link to="/log-in"><a className="btn bg-[#e4bb55] text-[#0e191b]">Log in</a></Link>
            <Link to="/register"><a className="btn bg-[#e4bb55] text-[#0e191b]">Register</a></Link>
          </>
      }
      </div>
    </div>
  );
};

export default NavigationBar;