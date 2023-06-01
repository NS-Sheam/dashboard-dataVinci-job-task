
import "./SideBar.css"
import { MdSpaceDashboard } from 'react-icons/md';
import { SiMoneygram } from 'react-icons/si';
import { AiFillShop, AiOutlineBarChart, AiOutlineSetting, AiOutlineShoppingCart, AiOutlineSound } from 'react-icons/ai';
import ActiveLink from "./ActiveLink";
import { Link } from "react-router-dom";


const SideBar = () => {
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <h2 className="text3xl">lksdfjldksajfklads</h2>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                {/* Sidebar content here */}
                <div className="overflow-y-auto">
                    <ul className="menu p-4 w-80 h-full bg-primaryBg text-white font-bold text-xl min-h-screen">
                        <li className="text-3xl my-1 lg:py-3 lg:px-7">
                            <Link to=""><AiFillShop className="text-blue-500" /> Swift Mart
                            </Link></li>
                        <li className="my-1">
                            <ActiveLink to={`/`}><MdSpaceDashboard /> Dashboard
                            </ActiveLink></li>
                        <li className="my-1">
                            <ActiveLink to="/order"><AiOutlineShoppingCart /> Orders & Delevary
                            </ActiveLink></li>
                        <li className="my-1">
                            <ActiveLink to="/stats"><AiOutlineBarChart /> Stats
                            </ActiveLink></li>
                        <li className="my-1">
                            <ActiveLink to="/finance"><SiMoneygram /> Finance
                            </ActiveLink></li>
                        <li className="my-1">
                            <ActiveLink to="/marketing"><AiOutlineSound /> Marketing
                            </ActiveLink></li>
                        <li className="my-1">
                            <ActiveLink to="/setting"><AiOutlineSetting /> Setting
                            </ActiveLink></li>
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default SideBar;