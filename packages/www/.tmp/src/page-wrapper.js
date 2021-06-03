import { h } from 'preact';
import { Helmet } from 'react-helmet';
import { MDXProvider } from '@mdx-js/preact';
const components = {
    codeblock: (props)=>h("div", Object.assign({
            class: 'bg-gray-400'
        }, props))
};
export default function PageWrapper(props) {
    return h(MDXProvider, {
        components: components
    }, h("div", null, h(Helmet, null, h("link", {
        rel: 'stylesheet',
        href: '/styles.css'
    })), props.children));
};
