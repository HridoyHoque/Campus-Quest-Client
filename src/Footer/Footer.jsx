import { Link } from "react-router-dom";


const Footer = () => {
    return (

        <footer className="footer p-10 bg-neutral text-neutral-content">
            <div className="flex">
                <img className="rounded-lg" height='115' width='115' src="https://i.ibb.co/qBFFCwz/Campus-Quest.png" alt="" />
              <div>
              <Link> <h2 className="text-4xl text-black">Campus<span className="text-indigo-700">Quest</span></h2></Link>
              <h2 className="text-2xl text-black"> Since 2012</h2>
              </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;