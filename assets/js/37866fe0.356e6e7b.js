"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[194],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1974:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={},l=void 0,p={unversionedId:"design/encryption",id:"design/encryption",title:"encryption",description:"Current Process:",source:"@site/docs/design/encryption.md",sourceDirName:"design",slug:"/design/encryption",permalink:"/design/encryption",tags:[],version:"current",frontMatter:{}},u=[],s={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Current Process:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Upload:")),(0,i.kt)("p",null,"1- Get the wallet address and signature (time-based) from metamask"),(0,i.kt)("p",null,"2- randomly create symmetric key on client per content"),(0,i.kt)("p",null,"3- encrypt the file and send it to the backend"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sharing:")),(0,i.kt)("p",null,"1- I get the person DID (which can be seeded with wallet address)"),(0,i.kt)("p",null,"2- I generate the jwe specific to the DID"),(0,i.kt)("p",null,"3- If we want the revoke, we need to also put some information in the jwe that we need to fetch from a globally accessible source(ceramic, blockchain,...) to validate access. Otherwise, we still have the time-based revokation feature"),(0,i.kt)("p",null,"4- Share the jwe with the signature included in the header"),(0,i.kt)("p",null,"5- The other person can validate and open the file"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Cons:")),(0,i.kt)("p",null,"1- Encryption is CPU insentive"),(0,i.kt)("p",null,"2- revokation before the time expires require a globally accessible source"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Pros:")),(0,i.kt)("p",null,"1- size of jwe does not depend on the size of the file"),(0,i.kt)("p",null,"2- one encrypted file can be shared with multiple people"),(0,i.kt)("p",null,"3- jwe file can be shared on public ipfs without any security problem"))}f.isMDXComponent=!0}}]);