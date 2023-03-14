(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{114:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var n=r(2),o=r(6),i=(r(0),r(188)),a={id:"index",title:"react-virtuoso",slug:"/api",sidebar_label:"README",hide_title:!0},s={unversionedId:"api/index",id:"api/index",isDocsHomePage:!1,title:"react-virtuoso",description:"npm version",source:"@site/docs/api/index.md",slug:"/api",permalink:"/api",editUrl:"https://github.com/petyosi/react-virtuoso/edit/master/site/docs/api/index.md",version:"current",sidebar_label:"README"},c=[{value:"Sponsors",id:"sponsors",children:[]},{value:"Get Started",id:"get-started",children:[]},{value:"Grouped Mode",id:"grouped-mode",children:[]},{value:"Grid",id:"grid",children:[]},{value:"Table",id:"table",children:[]},{value:"Works With Your UI Library of Choice",id:"works-with-your-ui-library-of-choice",children:[]},{value:"Documentation and Demos",id:"documentation-and-demos",children:[]},{value:"Browser support",id:"browser-support",children:[]},{value:"Author",id:"author",children:[]},{value:"Contributing",id:"contributing",children:[{value:"Fixes and new Features",id:"fixes-and-new-features",children:[]},{value:"Docs",id:"docs",children:[]}]},{value:"License",id:"license",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("img",{src:"https://user-images.githubusercontent.com/13347/101237112-ec4c6000-36de-11eb-936d-4b6b7ec94976.png",width:"229"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"//badge.fury.io/js/react-virtuoso"}),Object(i.b)("img",Object(n.a)({parentName:"a"},{src:"https://img.shields.io/npm/v/react-virtuoso.svg?style=flat",alt:"npm version"})))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"React Virtuoso")," is the most powerful React virtual list/table component, full stop. Here's why:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Variable sized items out of the box; no manual measurements or hard-coding item heights is necessary;"),Object(i.b)("li",{parentName:"ul"},"Support for ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/prepend-items/"}),"reverse (bottom up) scrolling and prepending items")," (chat, feeds, etc);"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/grouped-by-first-letter/"}),"Grouped mode with sticky headers"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/grid-responsive-columns/"}),"Responsive grid layout"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/hello-table/"}),"Table Support"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/auto-resizing/"}),"Automatic handling of content resize"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/customize-structure/"}),"Custom Header, Footer, and empty list components"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/top-items/"}),"Pinned top items"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/endless-scrolling/"}),"Endless scrolling"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/press-to-load-more/"}),"press to load more"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/initial-index/"}),"Initial top most item index"),";"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://virtuoso.dev/scroll-to-index/"}),"Scroll to index method"),".")),Object(i.b)("p",null,"For live examples and documentation, check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://virtuoso.dev"}),"documentation website"),"."),Object(i.b)("h2",{id:"sponsors"},"Sponsors"),Object(i.b)("p",null,"If you are using Virtuoso for work, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/sponsors/petyosi"}),"sponsor it"),". Any donation helps a lot with the project development and maintenance."),Object(i.b)("h2",{id:"get-started"},"Get Started"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npm install react-virtuoso\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"import * as React from 'react'\nimport * as ReactDOM from 'react-dom'\nimport { Virtuoso } from 'react-virtuoso'\n\nconst App = () => {\n  return <Virtuoso style={{ height: '400px' }} totalCount={200} itemContent={index => <div>Item {index}</div>} />\n}\n\nReactDOM.render(<App />, document.getElementById('root'))\n")),Object(i.b)("h2",{id:"grouped-mode"},Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://virtuoso.dev/grouped-by-first-letter/"}),"Grouped Mode")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"GroupedVirtuoso"),' component is a variant of the "flat" ',Object(i.b)("inlineCode",{parentName:"p"},"Virtuoso"),", with the following differences:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Instead of ",Object(i.b)("inlineCode",{parentName:"li"},"totalCount"),", the component exposes ",Object(i.b)("inlineCode",{parentName:"li"},"groupCounts: number[]")," property, which specifies the amount of items in each group.\nFor example, passing ",Object(i.b)("inlineCode",{parentName:"li"},"[20, 30]")," will render two groups with 20 and 30 items each;"),Object(i.b)("li",{parentName:"ul"},"In addition the ",Object(i.b)("inlineCode",{parentName:"li"},"itemContent")," property, the component requires an additional ",Object(i.b)("inlineCode",{parentName:"li"},"groupContent")," property,\nwhich renders the ",Object(i.b)("strong",{parentName:"li"},"group header"),". The ",Object(i.b)("inlineCode",{parentName:"li"},"groupContent")," callback receives the zero-based group index as a parameter.")),Object(i.b)("h2",{id:"grid"},Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://virtuoso.dev/grid-responsive-columns/"}),"Grid")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"VirtuosoGrid")," component displays ",Object(i.b)("strong",{parentName:"p"},"same sized items")," in multiple columns.\nThe layout and item sizing is controlled through CSS class properties, which allows you to use media queries, min-width, percentage, etc."),Object(i.b)("h2",{id:"table"},Object(i.b)("a",Object(n.a)({parentName:"h2"},{href:"https://virtuoso.dev/hello-table/"}),"Table")),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"TableVirtuoso")," component works just like ",Object(i.b)("inlineCode",{parentName:"p"},"Virtuoso"),", but with HTML tables.\nIt supports window scrolling, sticky headers, sticky columns, and works with React Table and MUI Table."),Object(i.b)("h2",{id:"works-with-your-ui-library-of-choice"},"Works With Your UI Library of Choice"),Object(i.b)("p",null,"You can customize the markup up to your requirements - check ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://virtuoso.dev/material-ui-endless-scrolling/"}),"the Material UI list demo"),".\nIf you need to support reordering, ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://virtuoso.dev/react-sortable-hoc/"}),"check the React Sortable HOC example"),"."),Object(i.b)("h2",{id:"documentation-and-demos"},"Documentation and Demos"),Object(i.b)("p",null,"For in-depth documentation and live examples of the supported features and live demos, check the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://virtuoso.dev"}),"documentation website"),"."),Object(i.b)("h2",{id:"browser-support"},"Browser support"),Object(i.b)("p",null,"To support ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://caniuse.com/resizeobserver"}),"legacy browsers"),", you might have to load a ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.npmjs.com/package/resize-observer-polyfill"}),"ResizeObserver Polyfill")," before using ",Object(i.b)("inlineCode",{parentName:"p"},"react-virtuoso"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"import ResizeObserver from 'resize-observer-polyfill'\nif (!window.ResizeObserver)\n  window.ResizeObserver = ResizeObserver\n")),Object(i.b)("h2",{id:"author"},"Author"),Object(i.b)("p",null,"Petyo Ivanov ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"//twitter.com/petyosi"}),"@petyosi"),"."),Object(i.b)("h2",{id:"contributing"},"Contributing"),Object(i.b)("h3",{id:"fixes-and-new-features"},"Fixes and new Features"),Object(i.b)("p",null,"To run the tests, use ",Object(i.b)("inlineCode",{parentName:"p"},"npm run test"),".\nAn end-to-end browser-based test suite is runnable with ",Object(i.b)("inlineCode",{parentName:"p"},"npm run e2e"),", with the pages being ",Object(i.b)("inlineCode",{parentName:"p"},"e2e/*.tsx")," and the tests ",Object(i.b)("inlineCode",{parentName:"p"},"e2e/*.test.ts"),"."),Object(i.b)("p",null,"A convenient way to debug something is to preview the test cases in the browser.\nTo do that, run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run browse-examples")," - it will open a crude UI that lets you browse the components in the ",Object(i.b)("inlineCode",{parentName:"p"},"e2e")," folder."),Object(i.b)("h3",{id:"docs"},"Docs"),Object(i.b)("p",null,"The documentation site is built with docusaurus and the content is available in the ",Object(i.b)("inlineCode",{parentName:"p"},"site/docs")," directory.\nThe API reference is generated from the doc comments in ",Object(i.b)("inlineCode",{parentName:"p"},"src/components.tsx"),"."),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,"MIT License."))}b.isMDXComponent=!0},188:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return m}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),b=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=b(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=b(r),d=n,m=l["".concat(a,".").concat(d)]||l[d]||u[d]||i;return r?o.a.createElement(m,s(s({ref:t},p),{},{components:r})):o.a.createElement(m,s({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);