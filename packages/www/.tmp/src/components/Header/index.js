import { h } from 'preact';
import Logo from '../Logo/index.js';
import Nav from './Nav.js';
import MobileNav from './MobileNav.js';
import MaxWidth from '../Layout/MaxWidth.js';
const Header = ()=>{
    return h("header", {
        className: 'fixed flex justify-center h-[70px] w-screen bg-gray-900 text-white shadow-md z-10'
    }, h(MaxWidth, null, h("div", {
        className: 'relative flex justify-between items-center py-2 px-0 md:px-5 rounded-xl h-full'
    }, h(Logo, null), h(Nav, null))), h(MobileNav, null));
};
export default Header;
