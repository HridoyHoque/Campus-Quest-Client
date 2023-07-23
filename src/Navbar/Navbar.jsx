import { Link } from "react-router-dom";
import logo from '/CampusQuest.png'

const Navbar = () => {

    const NavItems = <>
    <li className="text-2xl"><Link to='/'>Home</Link></li>
    <li className="text-2xl"><Link to='/blog'>Colleges</Link></li>
    <li className="text-2xl"><Link to='/allToys'>Admission</Link></li>
    <li className="text-2xl"><Link to='/addToys'>My College</Link></li>

</>
    return (
        <>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           {NavItems}
                        </ul>
                    </div>
                    <Link to='/' className=""><img height='107' width='107' src={logo} alt="" /></Link>
                    <Link> <h2 className="text-4xl text-black">Campus<span className="text-indigo-700">Quest</span></h2></Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {NavItems}
                    </ul>
                </div>
                {/* <div className="navbar-end">
                    <a className="btn">Button</a>
                </div> */}
            </div>

        </>
    );
};

export default Navbar;