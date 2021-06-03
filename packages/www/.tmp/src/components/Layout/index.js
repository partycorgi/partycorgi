import { h } from 'preact';
import Header from '../Header/index.js';
const Layout = ({ children  })=>{
    return h("div", {
        className: 'flex flex-col min-h-screen w-full bg-gray-900 text-white'
    }, h(Header, null), h("div", {
        className: 'flex-1 mt-[70px]'
    }, children));
};
export default Layout;
