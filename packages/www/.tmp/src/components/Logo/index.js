import { h } from 'preact';
import PartyCorgi from './PartyCorgi.js';
import Wordmark from './Wordmark.js';
const Logo = ()=>{
    return h("a", {
        href: '/',
        className: 'flex items-center font-bold'
    }, h(PartyCorgi, null), h(Wordmark, null));
};
export default Logo;
