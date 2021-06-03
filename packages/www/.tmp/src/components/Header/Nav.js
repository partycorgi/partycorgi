import { h } from 'preact';
const Nav = ()=>{
    return h("nav", {
        className: 'relative hidden md:flex z-[1]'
    }, h("a", {
        className: 'py-2 px-4 ml-2 font-semibold text-md rounded-lg hover:bg-red-400 hover:bg-opacity-80 transition-all duration-200 ease-in-out',
        href: '/coc'
    }, "Code of Conduct"), h("a", {
        className: 'py-2 px-4 ml-2 font-semibold text-md rounded-lg hover:bg-red-400 hover:bg-opacity-80 transition-all duration-200 ease-in-out',
        href: 'https://discord.gg/partycorgi'
    }, "Join Discord"));
};
export default Nav;
