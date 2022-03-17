"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8029],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?o.createElement(h,r(r({ref:t},u),{},{components:n})):o.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<a;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1145:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var o=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],s={id:"secure-domain",title:"Secure Domain setup",sidebar_label:"Authentication (Secure Domain)"},l=void 0,c={unversionedId:"devops-guide/secure-domain",id:"devops-guide/secure-domain",title:"Secure Domain setup",description:"It is possible to allow only authenticated users to create new conference",source:"@site/docs/devops-guide/secure-domain.md",sourceDirName:"devops-guide",slug:"/devops-guide/secure-domain",permalink:"/handbook/docs/devops-guide/secure-domain",editUrl:"https://github.com/jitsi/handbook/edit/master/docs/devops-guide/secure-domain.md",tags:[],version:"current",lastUpdatedBy:"Sa\xfal Ibarra Corretg\xe9",lastUpdatedAt:1647523644,formattedLastUpdatedAt:"3/17/2022",frontMatter:{id:"secure-domain",title:"Secure Domain setup",sidebar_label:"Authentication (Secure Domain)"},sidebar:"docs",previous:{title:"Manual installation",permalink:"/handbook/docs/devops-guide/devops-guide-manual"},next:{title:"LDAP Authentication",permalink:"/handbook/docs/devops-guide/ldap-authentication"}},u={},p=[{value:"Prosody configuration",id:"prosody-configuration",level:2},{value:"Enable authentication",id:"enable-authentication",level:3},{value:"Enable anonymous login for guests",id:"enable-anonymous-login-for-guests",level:3},{value:"Jitsi Meet configuration",id:"jitsi-meet-configuration",level:2},{value:"Jicofo configuration",id:"jicofo-configuration",level:2},{value:"Create users in Prosody (internal auth)",id:"create-users-in-prosody-internal-auth",level:2},{value:"Optional: Jigasi configuration",id:"optional-jigasi-configuration",level:2},{value:"Enable Authentication",id:"enable-authentication-1",level:3},{value:"Debugging",id:"debugging",level:3}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"It is possible to allow only authenticated users to create new conference\nrooms. Whenever a new room is about to be created, Jitsi Meet will prompt for\na user name and password. After the room is created, others will be able to join\nfrom anonymous domain. Here's what has to be configured:"),(0,a.kt)("h2",{id:"prosody-configuration"},"Prosody configuration"),(0,a.kt)("p",null,"If you have installed Jitsi Meet from the Debian package, these changes should be made in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/prosody/conf.avail/[your-hostname].cfg.lua")),(0,a.kt)("h3",{id:"enable-authentication"},"Enable authentication"),(0,a.kt)("p",null,"Inside the ",(0,a.kt)("inlineCode",{parentName:"p"},'VirtualHost "[your-hostname]"')," block, replace anonymous authentication with hashed password authentication:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'VirtualHost "jitsi-meet.example.com"\n    authentication = "internal_hashed"\n')),(0,a.kt)("p",null,"Replace ",(0,a.kt)("inlineCode",{parentName:"p"},"jitsi-meet.example.com")," with your hostname."),(0,a.kt)("h3",{id:"enable-anonymous-login-for-guests"},"Enable anonymous login for guests"),(0,a.kt)("p",null,"Add this block ",(0,a.kt)("strong",{parentName:"p"},"after the previous VirtualHost")," to enable the anonymous login method for guests:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'VirtualHost "guest.jitsi-meet.example.com"\n    authentication = "anonymous"\n    c2s_require_encryption = false\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Note that ",(0,a.kt)("inlineCode",{parentName:"em"},"guest.jitsi-meet.example.com")," is internal to Jitsi, and you do not need to (and should not) create a DNS record for it, or generate an SSL/TLS certificate, or do any web server configuration. While it is internal, you should still replace ",(0,a.kt)("inlineCode",{parentName:"em"},"jitsi-meet.example.com")," with your hostname.")),(0,a.kt)("h2",{id:"jitsi-meet-configuration"},"Jitsi Meet configuration"),(0,a.kt)("p",null,"In config.js, the ",(0,a.kt)("inlineCode",{parentName:"p"},"anonymousdomain")," options has to be set."),(0,a.kt)("p",null,"If you have installed jitsi-meet from the Debian package, these changes should be made in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/jitsi/meet/[your-hostname]-config.js"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"var config = {\n    hosts: {\n            domain: 'jitsi-meet.example.com',\n            anonymousdomain: 'guest.jitsi-meet.example.com',\n            ...\n        },\n        ...\n}\n")),(0,a.kt)("h2",{id:"jicofo-configuration"},"Jicofo configuration"),(0,a.kt)("p",null,"When running Jicofo, specify your main domain in an additional configuration\nproperty. Jicofo will accept conference allocation requests only from the\nauthenticated domain. This should go in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/jitsi/jicofo/sip-communicator.properties"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"org.jitsi.jicofo.auth.URL=XMPP:jitsi-meet.example.com\n")),(0,a.kt)("p",null,"If you have installed Jicofo from the Debian package, this should go as a new 'authentication' section in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/jitsi/jicofo/jicofo.conf"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jicofo {\n  authentication: {\n    enabled: true\n    type: XMPP\n    login-url: jitsi-meet.example.com\n }\n ...\n")),(0,a.kt)("p",null,"When using token based authentication, the type must use ",(0,a.kt)("inlineCode",{parentName:"p"},"JWT")," as the scheme instead:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"jicofo {\n  authentication: {\n    enabled: true\n    type: JWT\n    login-url: jitsi-meet.example.com\n }\n ...\n")),(0,a.kt)("h2",{id:"create-users-in-prosody-internal-auth"},"Create users in Prosody (internal auth)"),(0,a.kt)("p",null,"Finally, run ",(0,a.kt)("inlineCode",{parentName:"p"},"prosodyctl")," to create a user in Prosody:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo prosodyctl register <username> jitsi-meet.example.com <password>\n")),(0,a.kt)("p",null,"and then restart prosody, jicofo and jitsi-videobridge2"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"systemctl restart prosody\nsystemctl restart jicofo\nsystemctl restart jitsi-videobridge2\n")),(0,a.kt)("h2",{id:"optional-jigasi-configuration"},"Optional: Jigasi configuration"),(0,a.kt)("h3",{id:"enable-authentication-1"},"Enable Authentication"),(0,a.kt)("p",null,"If you are using Jigasi, set it to authenticate by editing the following lines in ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/jitsi/jigasi/sip-communicator.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"org.jitsi.jigasi.xmpp.acc.USER_ID=SOME_USER@SOME_DOMAIN\norg.jitsi.jigasi.xmpp.acc.PASS=SOME_PASS\norg.jitsi.jigasi.xmpp.acc.ANONYMOUS_AUTH=false\n")),(0,a.kt)("p",null,"Note that the password is the actual plaintext password, not a base64 encoding."),(0,a.kt)("h3",{id:"debugging"},"Debugging"),(0,a.kt)("p",null,"If you experience problems with a certificate chain, you may need to uncomment the following line, also in ",(0,a.kt)("inlineCode",{parentName:"p"},"sip-communicator.properties"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"net.java.sip.communicator.service.gui.ALWAYS_TRUST_MODE_ENABLED=true\n")),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This should only be used for testing/debugging purposes, or in controlled environments. If you confirm that this is the problem, you should then solve it in another way (e.g. get a signed certificate for Prosody, or add the particular certificate to Jigasi\u2019s trust store)."))))}m.isMDXComponent=!0}}]);