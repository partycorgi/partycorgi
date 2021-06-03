import { h } from 'preact';
const MaxWidth = ({ className , children  })=>{
    return h("div", {
        className: `w-full py-0 px-5 md:px-8 max-w-screen-lg ${className}`
    }, children);
};
export default MaxWidth;
