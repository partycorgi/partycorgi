import { h } from 'preact';
import MaxWidth from './MaxWidth.js';
const Hero = ({ className , children  })=>{
    return h("div", {
        className: 'bg-gradient-to-br from-purple-400 to-green-300'
    }, h(MaxWidth, {
        className: 'mx-auto'
    }, h("div", {
        className: `flex flex-col md:h-[684px] py-10 px-5 ${className}`
    }, children)));
};
export default Hero;
