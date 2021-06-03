/** @jsxRuntime classic */
/** @jsx mdx */
/** @jsxFrag mdx.Fragment */
import { mdx } from '@mdx-js/preact';
export const meta = {
    title: "A Post",
    slug: "/a-post"
};
const MDXLayout = "wrapper";
function MDXContent({ components , ...props }) {
    return mdx(MDXLayout, Object.assign({
        components: components
    }, props), mdx("h1", {
        id: "a-post"
    }, mdx("a", {
        className: "heading-link-anchor",
        href: "#a-post",
        parentName: "h1"
    }, mdx("heading-link-icon", {
        className: "heading-link-icon",
        parentName: "a"
    })), "A Post"), mdx("p", null, "and some content"), mdx("codeblock", {
        className: "language-js",
        codestring: "const thing = {};"
    }, mdx("pre", {
        className: "prism-code language-js",
        style: {
            color: "#d6deeb",
            backgroundColor: "transparent"
        },
        parentName: "codeblock"
    }, mdx("div", {
        className: "token-line",
        style: {
            color: "#d6deeb"
        },
        parentName: "pre"
    }, mdx("span", {
        className: "token keyword",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "const"), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " thing "), mdx("span", {
        className: "token operator",
        style: {
            color: "rgb(127, 219, 202)"
        },
        parentName: "div"
    }, "="), mdx("span", {
        className: "token plain",
        parentName: "div"
    }, " "), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "{"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, "}"), mdx("span", {
        className: "token punctuation",
        style: {
            color: "rgb(199, 146, 234)"
        },
        parentName: "div"
    }, ";")))));
}
MDXContent.isMDXComponent = true;
export default MDXContent;
