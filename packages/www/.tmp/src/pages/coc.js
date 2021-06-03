import { h } from 'preact';
import Layout from '../components/Layout/index.js';
import Hero from '../components/Layout/Hero.js';
import MaxWidth from '../components/Layout/MaxWidth.js';
import MdxCOC from '../content/coc.mdx';
const COC = ()=>{
    return h(Layout, null, h(Hero, {
        className: 'items-start justify-center'
    }, h("h1", {
        className: 'font-bold text-5xl text-gray-900'
    }, "Code of Conduct")), h(MaxWidth, null, h(MdxCOC, null)));
};
export default COC;
