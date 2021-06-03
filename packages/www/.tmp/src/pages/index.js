import { h } from 'preact';
import Layout from '../components/Layout/index.js';
import Hero from '../components/Layout/Hero.js';
// import { FaDiscord } from '@react-icons/all-files/fa/FaDiscord.js'
const Home = ()=>h(Layout, null, h(Hero, null, h("h1", {
        className: 'text-5xl font-bold text-center pb-12 text-gray-900'
    }, "An inclusive community of content creators helping each other grow."), h("a", {
        href: 'https://discord.gg/partycorgi',
        className: 'py-4 px-5 rounded-md bg-gray-900 font-semibold'
    }, "Join Discord")))
;
export default Home;
