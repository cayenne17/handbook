"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3833],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=i.createContext({}),s=function(e){var t=i.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(d,".").concat(m)]||c[m]||p[m]||a;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4739:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=["components"],l={id:"dev-guide-web",title:"Developer Guide (Web)",sidebar_label:"Start"},d=void 0,s={unversionedId:"dev-guide/dev-guide-web",id:"dev-guide/dev-guide-web",title:"Developer Guide (Web)",description:"Welcome to the developers guide for web! This guide will help you setup a development",source:"@site/docs/dev-guide/web.md",sourceDirName:"dev-guide",slug:"/dev-guide/dev-guide-web",permalink:"/handbook/docs/dev-guide/dev-guide-web",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/dev-guide/web.md",tags:[],version:"current",lastUpdatedBy:"Sa\xfal Ibarra Corretg\xe9",lastUpdatedAt:1647523644,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"dev-guide-web",title:"Developer Guide (Web)",sidebar_label:"Start"},sidebar:"docs",previous:{title:"Contributing Guidelines",permalink:"/handbook/docs/dev-guide/dev-guide-contributing"},next:{title:"Modifying lib-jitsi-meet",permalink:"/handbook/docs/dev-guide/dev-guide-ljm"}},u={},p=[{value:"Building the sources",id:"building-the-sources",level:2},{value:"Running with webpack-dev-server for development",id:"running-with-webpack-dev-server-for-development",level:3},{value:"Certificate Error",id:"certificate-error",level:4},{value:"Building .debs",id:"building-debs",level:3},{value:"Running from source on existing deployment",id:"running-from-source-on-existing-deployment",level:3}],c={toc:p};function m(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welcome to the developers guide for web! This guide will help you setup a development\nenvironment to start working on the Jitsi Meet applications."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Building the apps / SDKs is not supported on Windows."))),(0,a.kt)("h2",{id:"building-the-sources"},"Building the sources"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Node.js >= 16 and npm >= 8 are required."))),(0,a.kt)("p",null,"On Debian/Ubuntu systems, the required packages can be installed with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'Download "Linux Binaries (x64)" from ',(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"https://nodejs.org/en/download/")),(0,a.kt)("li",{parentName:"ul"},"Install Node.js following these instructions: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/help/wiki/Installation"},"https://github.com/nodejs/help/wiki/Installation"))),(0,a.kt)("p",null,"Then go ahead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# Clone the repository\ngit clone https://github.com/jitsi/jitsi-meet\ncd ./jitsi-meet\n\nnpm install\n\n# To build the Jitsi Meet application, just type\nmake\n")),(0,a.kt)("h3",{id:"running-with-webpack-dev-server-for-development"},"Running with webpack-dev-server for development"),(0,a.kt)("p",null,"Use the following command in your terminal:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"make dev\n")),(0,a.kt)("p",null,"By default the backend deployment used is ",(0,a.kt)("inlineCode",{parentName:"p"},"alpha.jitsi.net"),". You can point the Jitsi Meet app at a different backend by using a proxy server. To do this, set the WEBPACK_DEV_SERVER_PROXY_TARGET variable:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"export WEBPACK_DEV_SERVER_PROXY_TARGET=https://your-example-server.com\nmake dev\n")),(0,a.kt)("p",null,"The app should be running at https://localhost:8080/"),(0,a.kt)("h4",{id:"certificate-error"},"Certificate Error"),(0,a.kt)("p",null,"Browsers may show a certificate error since the development certificate is self-signed. It's safe to disregard those\nwarning and continue to your site."),(0,a.kt)("h3",{id:"building-debs"},"Building .debs"),(0,a.kt)("p",null,"To make a deb you can easily deploy to a public test server, ensure you have the lib-jitsi-meet sources you wish, then:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"npm install\nmake\ndpkg-buildpackage -A -rfakeroot -us -uc -tc\n")),(0,a.kt)("p",null,"You'll have a bunch of .deb files in the parent directory, and can push the updated source to your server and install it with the jitsi-meet-web deb file."),(0,a.kt)("h3",{id:"running-from-source-on-existing-deployment"},"Running from source on existing deployment"),(0,a.kt)("p",null,"Follow the document ",(0,a.kt)("a",{parentName:"p",href:"https://community.jitsi.org/t/how-to-how-to-build-jitsi-meet-from-source-a-developers-guide/75422"},"https://community.jitsi.org/t/how-to-how-to-build-jitsi-meet-from-source-a-developers-guide/75422")))}m.isMDXComponent=!0}}]);