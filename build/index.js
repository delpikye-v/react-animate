!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("react"),require("styled-components")):"function"==typeof define&&define.amd?define(["exports","react","styled-components"],t):t((n="undefined"!=typeof globalThis?globalThis:n||self).ReactAnimate={},n.React,n.styled)}(this,(function(n,t,r){"use strict";function a(n){return n&&"object"==typeof n&&"default"in n?n:{default:n}}var o=a(t),e=a(r),s=function(){return s=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},s.apply(this,arguments)};function f(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var m,i,c,l,p,g,d,y,x,u,X,Y,h,k,b,w,O,v,T,Z,I,j,F,E,S,z,P,R,B,C,L,q,N,A,M,W,D,H,V,_,G,J,K,Q,U,$,nn,tn,rn,an,on,en,sn,fn,mn,cn,ln,pn,gn,dn=r.keyframes(m||(m=f(["\n  50% {\n    border-color: transparent;\n  }\n"],["\n  50% {\n    border-color: transparent;\n  }\n"]))),yn=e.default.span(i||(i=f(["\n    margin-left: 2px;\n    border-left: 3px solid ",";\n    animation: "," 0.7s steps(1) infinite;\n"],["\n    margin-left: 2px;\n    border-left: 3px solid ",";\n    animation: "," 0.7s steps(1) infinite;\n"])),(function(n){return n.cursorColor}),dn),xn=function(n){var r=n.heading,a=void 0===r?"":r,e=n.dataText,s=void 0===e?[]:e,f=n.className,m=n.cursorColor,i=t.useState(""),c=i[0],l=i[1],p=t.useState(!1),g=p[0],d=p[1],y=t.useState(0),x=y[0],u=y[1],X=t.useState(150),Y=X[0],h=X[1];t.useEffect((function(){var n=setTimeout((function(){k()}),Y);return function(){return clearTimeout(n)}}));var k=function(){var n=x%s.length,t=s[n],r=g?-1:1;l(t.substring(0,c.length+r)),h(g?30:150),g||c!==t?g&&""===c&&(d(!1),u(x+1)):setTimeout((function(){return d(!0)}),500)};return o.default.createElement("div",{className:f},a&&o.default.createElement(o.default.Fragment,null,a," "),o.default.createElement("span",null,c),o.default.createElement(yn,{cursorColor:m}))},un=function(n){var t=n.children,r=n.className,a=n.type,e=void 0===a?null:a,f=n.typingWrite,m=void 0===f?{}:f,i=function(n,t){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(r[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(n);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(n,a[o])&&(r[a[o]]=n[a[o]])}return r}(n,["children","className","type","typingWrite"]);return"typewriter"===e?o.default.createElement(xn,s({},m)):o.default.createElement(ut,s({className:r,type:e},i),t)},Xn=r.keyframes(c||(c=f(["\n  from { filter: blur(0px); }\n  to { filter: blur(6px); }\n"],["\n  from { filter: blur(0px); }\n  to { filter: blur(6px); }\n"]))),Yn=r.keyframes(l||(l=f(["\n  10% { transform: scaleY(0.9) translateY(5%); }\n  45% { transform: scaleY(1.2) translateY(-100%); }\n  65% { transform: scaleY(0.95) translateY(0); }\n  75% { transform: scaleY(1.05) translateY(-25%); }\n  85% { transform: scaleY(1) translateY(0); }\n  100% { transform: scaleY(1) translateY(0%); }\n"],["\n  10% { transform: scaleY(0.9) translateY(5%); }\n  45% { transform: scaleY(1.2) translateY(-100%); }\n  65% { transform: scaleY(0.95) translateY(0); }\n  75% { transform: scaleY(1.05) translateY(-25%); }\n  85% { transform: scaleY(1) translateY(0); }\n  100% { transform: scaleY(1) translateY(0%); }\n"]))),hn=r.keyframes(p||(p=f(["\n  to {\n    text-shadow:\n    0 1px 0 #ccc,\n    0 2px 0 #c9c9c9,\n    0 3px 0 #bbb,\n    0 4px 0 #b9b9b9,\n    0 5px 0 #aaa,\n    0 6px 1px rgba(0, 0, 0, .1),\n    0 0 5px rgba(0, 0, 0, .1),\n    0 1px 3px rgba(0, 0, 0, .3),\n    0 3px 5px rgba(0, 0, 0, .2),\n    0 5px 10px rgba(0, 0, 0, .25)\n  }\n"],["\n  to {\n    text-shadow:\n    0 1px 0 #ccc,\n    0 2px 0 #c9c9c9,\n    0 3px 0 #bbb,\n    0 4px 0 #b9b9b9,\n    0 5px 0 #aaa,\n    0 6px 1px rgba(0, 0, 0, .1),\n    0 0 5px rgba(0, 0, 0, .1),\n    0 1px 3px rgba(0, 0, 0, .3),\n    0 3px 5px rgba(0, 0, 0, .2),\n    0 5px 10px rgba(0, 0, 0, .25)\n  }\n"]))),kn=r.keyframes(g||(g=f(["\n  0%, 40%, 80% { opacity: 1; }\n  20%, 60%, 100% { opacity: 0; }\n"],["\n  0%, 40%, 80% { opacity: 1; }\n  20%, 60%, 100% { opacity: 0; }\n"]))),bn=r.keyframes(d||(d=f(["\n  0% { transform: translate(2%, -10%) rotate(-1deg); }\n  100% { transform: translate(-2%, 5%) rotate(3deg); }\n"],["\n  0% { transform: translate(2%, -10%) rotate(-1deg); }\n  100% { transform: translate(-2%, 5%) rotate(3deg); }\n"]))),wn=r.keyframes(y||(y=f(["\n  0% { color: inherit; text-shadow: none; }\n  2%, 59%, 64%, 79% { color: #fff; }\n  3%, 59%, 63%, 78% { text-shadow: 0px 0px 60px, 0 0 22px, 0 0 1em inherit, 0 0 0.5em inherit, 0 0 .1em inherit, 0 10px 3px #000; }\n  60% { color: inherit; text-shadow: none; }\n  75% { color: inherit; text-shadow: none; }\n"],["\n  0% { color: inherit; text-shadow: none; }\n  2%, 59%, 64%, 79% { color: #fff; }\n  3%, 59%, 63%, 78% { text-shadow: 0px 0px 60px, 0 0 22px, 0 0 1em inherit, 0 0 0.5em inherit, 0 0 .1em inherit, 0 10px 3px #000; }\n  60% { color: inherit; text-shadow: none; }\n  75% { color: inherit; text-shadow: none; }\n"]))),On=r.keyframes(x||(x=f(["\n  0% { transform: scaleX(1); }\n  20% { transform: scaleX(0.9); }\n  50% { transform: scaleX(1.25); }\n  85% { transform: scaleX(0.8); }\n  100% { transform: scaleX(1); }\n"],["\n  0% { transform: scaleX(1); }\n  20% { transform: scaleX(0.9); }\n  50% { transform: scaleX(1.25); }\n  85% { transform: scaleX(0.8); }\n  100% { transform: scaleX(1); }\n"]))),vn=r.keyframes(u||(u=f(["\n  from { transform: scale(1); }\n  to { transform: scale(1.1); }\n"],["\n  from { transform: scale(1); }\n  to { transform: scale(1.1); }\n"]))),Tn=r.keyframes(X||(X=f(["\n  0%   { text-shadow: 1px 1px 0px #333; }\n\t50%   { text-shadow: 3px 3px 2px #333; }\n\t100%  { text-shadow: 9px 10px 6px #999; }\n"],["\n  0%   { text-shadow: 1px 1px 0px #333; }\n\t50%   { text-shadow: 3px 3px 2px #333; }\n\t100%  { text-shadow: 9px 10px 6px #999; }\n"]))),Zn=r.keyframes(Y||(Y=f(["\n  from { transform: rotateY(0deg); }\n  to { transform: rotateY(-360deg); }\n"],["\n  from { transform: rotateY(0deg); }\n  to { transform: rotateY(-360deg); }\n"]))),In=r.keyframes(h||(h=f(["\n  0% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n  20% {\n    transform: rotateZ(15deg);\n    transform-origin: center top;\n  }\n  40% {\n    transform: rotateZ(-15deg);\n    transform-origin: center top;\n  }\n  60% {\n    transform: rotateZ(7deg);\n    transform-origin: center top;\n  }\n  80% {\n    transform: rotateZ(-7deg);\n    transform-origin: center top;\n  }\n  100% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n"],["\n  0% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n  20% {\n    transform: rotateZ(15deg);\n    transform-origin: center top;\n  }\n  40% {\n    transform: rotateZ(-15deg);\n    transform-origin: center top;\n  }\n  60% {\n    transform: rotateZ(7deg);\n    transform-origin: center top;\n  }\n  80% {\n    transform: rotateZ(-7deg);\n    transform-origin: center top;\n  }\n  100% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n"]))),jn=r.keyframes(k||(k=f(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"],["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]))),Fn=r.keyframes(b||(b=f(["\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to { opacity: 1 }\n"]))),En=r.keyframes(w||(w=f(["\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to { opacity: 1 }\n"]))),Sn=r.keyframes(O||(O=f(["\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to { opacity: 1 }\n"]))),zn=r.keyframes(v||(v=f(["\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to { opacity: 1 }\n"]))),Pn=r.keyframes(T||(T=f(["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"],["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"]))),Rn=r.keyframes(Z||(Z=f(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"]))),Bn=r.keyframes(I||(I=f(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"]))),Cn=r.keyframes(j||(j=f(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"]))),Ln=r.keyframes(F||(F=f(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"]))),qn=r.keyframes(E||(E=f(["\n  0% { transform-origin: left; }\n  30% {\n    transform: rotate(110deg);\n    transform-origin: left;\n  }\n  50% {\n    transform: rotate(75deg);\n    transform-origin: left;\n  }\n  65% {\n    transform: rotate(100deg);\n    transform-origin: left;\n  }\n  78% {\n    transform: rotate(80deg);\n    transform-origin: left;\n  }\n  88% {\n    transform: rotate(95deg);\n    transform-origin: left;\n  }\n  95% {\n    transform: rotate(86deg);\n    transform-origin: left;\n  }\n  100% {\n    transform: rotate(90deg);\n    transform-origin: left;\n  }\n"],["\n  0% { transform-origin: left; }\n  30% {\n    transform: rotate(110deg);\n    transform-origin: left;\n  }\n  50% {\n    transform: rotate(75deg);\n    transform-origin: left;\n  }\n  65% {\n    transform: rotate(100deg);\n    transform-origin: left;\n  }\n  78% {\n    transform: rotate(80deg);\n    transform-origin: left;\n  }\n  88% {\n    transform: rotate(95deg);\n    transform-origin: left;\n  }\n  95% {\n    transform: rotate(86deg);\n    transform-origin: left;\n  }\n  100% {\n    transform: rotate(90deg);\n    transform-origin: left;\n  }\n"]))),Nn=r.keyframes(S||(S=f(["\n  0% { transform-origin: right; }\n  30% {\n    transform: rotate(-110deg);\n    transform-origin: right;\n  }\n  50% {\n    transform: rotate(-75deg);\n    transform-origin: right;\n  }\n  65% {\n    transform: rotate(-100deg);\n    transform-origin: right;\n  }\n  78% {\n    transform: rotate(-80deg);\n    transform-origin: right;\n  }\n  88% {\n    transform: rotate(-95deg);\n    transform-origin: right;\n  }\n  95% {\n    transform: rotate(-86deg);\n    transform-origin: right;\n  }\n  100% {\n    transform: rotate(-90deg);\n    transform-origin: right;\n  }\n"],["\n  0% { transform-origin: right; }\n  30% {\n    transform: rotate(-110deg);\n    transform-origin: right;\n  }\n  50% {\n    transform: rotate(-75deg);\n    transform-origin: right;\n  }\n  65% {\n    transform: rotate(-100deg);\n    transform-origin: right;\n  }\n  78% {\n    transform: rotate(-80deg);\n    transform-origin: right;\n  }\n  88% {\n    transform: rotate(-95deg);\n    transform-origin: right;\n  }\n  95% {\n    transform: rotate(-86deg);\n    transform-origin: right;\n  }\n  100% {\n    transform: rotate(-90deg);\n    transform-origin: right;\n  }\n"]))),An=r.keyframes(z||(z=f(["\n  0% { transform: scale(1, 1); }\n  15% { transform: scale(0.95, 0.95); }\n  30% { transform: scale(0.9, 0.9); }\n  55% { transform: scale(0.75, 0.75); }\n  70% { transform: scale(1.3, 1.3); }\n  85% { transform: scale(0.95, 0.95); }\n  100% { transform: scale(1, 1); }\n"],["\n  0% { transform: scale(1, 1); }\n  15% { transform: scale(0.95, 0.95); }\n  30% { transform: scale(0.9, 0.9); }\n  55% { transform: scale(0.75, 0.75); }\n  70% { transform: scale(1.3, 1.3); }\n  85% { transform: scale(0.95, 0.95); }\n  100% { transform: scale(1, 1); }\n"]))),Mn=r.keyframes(P||(P=f(["\n  0% { transform: scaleX(1); }\n  15% { transform: scaleX(0.95); }\n  30% { transform: scaleX(0.9); }\n  55% { transform: scaleX(0.75); }\n  70% { transform: scaleX(1.3); }\n  85% { transform: scaleX(0.95); }\n  100% { transform: scaleX(1); }\n"],["\n  0% { transform: scaleX(1); }\n  15% { transform: scaleX(0.95); }\n  30% { transform: scaleX(0.9); }\n  55% { transform: scaleX(0.75); }\n  70% { transform: scaleX(1.3); }\n  85% { transform: scaleX(0.95); }\n  100% { transform: scaleX(1); }\n"]))),Wn=r.keyframes(R||(R=f(["\n  0% { transform: scaleY(1); }\n  15% { transform: scaleY(0.95); }\n  30% { transform: scaleY(0.9); }\n  55% { transform: scaleY(0.75); }\n  70% { transform: scaleY(1.3); }\n  85% { transform: scaleY(0.95); }\n  100% { transform: scaleY(1); }\n"],["\n  0% { transform: scaleY(1); }\n  15% { transform: scaleY(0.95); }\n  30% { transform: scaleY(0.9); }\n  55% { transform: scaleY(0.75); }\n  70% { transform: scaleY(1.3); }\n  85% { transform: scaleY(0.95); }\n  100% { transform: scaleY(1); }\n"]))),Dn=r.keyframes(B||(B=f(["\n  0% { transform: translate(2px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0px) rotate(1deg); }\n  30% { transform: translate(0px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(2px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(2px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n"],["\n  0% { transform: translate(2px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0px) rotate(1deg); }\n  30% { transform: translate(0px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(2px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(2px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n"]))),Hn=r.keyframes(C||(C=f(["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateX(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateX(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateX(-4px) }\n"],["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateX(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateX(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateX(-4px) }\n"]))),Vn=r.keyframes(L||(L=f(["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateY(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateY(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateY(-4px) }\n"],["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateY(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateY(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateY(-4px) }\n"]))),_n=r.keyframes(q||(q=f(["\n  0% {\n    transform: perspective(1000px) rotateX(360deg);\n    transform-origin: center;\n  }\n  100% {\n    transform: perspective(1000px) rotateX(0deg);\n    transform-origin: center;\n  }\n"],["\n  0% {\n    transform: perspective(1000px) rotateX(360deg);\n    transform-origin: center;\n  }\n  100% {\n    transform: perspective(1000px) rotateX(0deg);\n    transform-origin: center;\n  }\n"]))),Gn=r.keyframes(N||(N=f(["\n  0% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n  35% {\n    transform: rotateX(120deg);\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(360deg);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n  35% {\n    transform: rotateX(120deg);\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(360deg);\n    opacity: 1;\n  }\n"]))),Jn=r.keyframes(A||(A=f(["\n  0% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n  35% {\n    transform: rotateX(-40deg);\n    opacity: 1;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n"],["\n  0% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n  35% {\n    transform: rotateX(-40deg);\n    opacity: 1;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n"]))),Kn=r.keyframes(M||(M=f([" // tbm\n  0% {\n    transform:rotateX(0deg);\n  }\n  5% {\n    transform: rotateX(1turn);\n  }\n  10% {\n    transform: rotateX(2turn);\n  }\n  20% {\n    transform: rotateX(3turn);\n  }\n  40% {\n    transform: rotateX(4turn);\n  }\n  70%, 100% {\n    transform: rotateX(5turn);\n  }\n"],[" // tbm\n  0% {\n    transform:rotateX(0deg);\n  }\n  5% {\n    transform: rotateX(1turn);\n  }\n  10% {\n    transform: rotateX(2turn);\n  }\n  20% {\n    transform: rotateX(3turn);\n  }\n  40% {\n    transform: rotateX(4turn);\n  }\n  70%, 100% {\n    transform: rotateX(5turn);\n  }\n"]))),Qn=r.keyframes(W||(W=f(["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: center top;\n    opacity: 1;\n  }\n  to {\n    transform: rotateX(90deg);\n    transform-origin: center top;\n    opacity: 0;\n  }\n"],["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: center top;\n    opacity: 1;\n  }\n  to {\n    transform: rotateX(90deg);\n    transform-origin: center top;\n    opacity: 0;\n  }\n"]))),Un=r.keyframes(D||(D=f(["\n  from {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(-90deg) translateY(50px);\n  }\n"],["\n  from {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(-90deg) translateY(50px);\n  }\n"]))),$n=r.keyframes(H||(H=f(["\n  from {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(90deg);\n  }\n  to {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) ;\n  }\n"],["\n  from {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(90deg);\n  }\n  to {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) ;\n  }\n"]))),nt=r.keyframes(V||(V=f(["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: 50% 0;\n    opacity: 0;\n  }\n  to {\n    transform: rotateX(0deg);\n    transform-origin: 50% 0;\n    opacity: 1;\n  }\n"],["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: 50% 0;\n    opacity: 0;\n  }\n  to {\n    transform: rotateX(0deg);\n    transform-origin: 50% 0;\n    opacity: 1;\n  }\n"]))),tt=r.keyframes(_||(_=f(["\n  0% {\n    transform: rotateY(-95deg)  translateX(-200px) ;\n    transform-origin: left;\n  }\n  100% {\n    transform: rotateY(0deg);\n    transform-origin: left;\n  }\n"],["\n  0% {\n    transform: rotateY(-95deg)  translateX(-200px) ;\n    transform-origin: left;\n  }\n  100% {\n    transform: rotateY(0deg);\n    transform-origin: left;\n  }\n"]))),rt=r.keyframes(G||(G=f(["\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),at=r.keyframes(J||(J=f(["\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),ot=r.keyframes(K||(K=f(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"]))),et=r.keyframes(Q||(Q=f(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"]))),st=r.keyframes(U||(U=f(["\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),ft=r.keyframes($||($=f(["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),mt=r.keyframes(nn||(nn=f(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"]))),it=r.keyframes(tn||(tn=f(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"]))),ct=r.keyframes(rn||(rn=f(["\n  0% { transform: scale3d(1, 1, 1); }\n  30% { transform: scale3d(1, 0.4, 1); }\n  60% { transform: scale3d(0.4, 0.4, 1); }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n  }\n"],["\n  0% { transform: scale3d(1, 1, 1); }\n  30% { transform: scale3d(1, 0.4, 1); }\n  60% { transform: scale3d(0.4, 0.4, 1); }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n  }\n"]))),lt=r.keyframes(an||(an=f(["\n  0% {\n    opacity: 0;\n    transform: scale3d(0, 0, 0); }\n  30% {\n    opacity: 1;\n    transform: scale3d(0.4, 0.4, 1);\n  }\n  60% { transform: scale3d(0.4, 1, 1); }\n  100% { transform: scale3d(1, 1, 1); }\n"],["\n  0% {\n    opacity: 0;\n    transform: scale3d(0, 0, 0); }\n  30% {\n    opacity: 1;\n    transform: scale3d(0.4, 0.4, 1);\n  }\n  60% { transform: scale3d(0.4, 1, 1); }\n  100% { transform: scale3d(1, 1, 1); }\n"]))),pt=r.keyframes(on||(on=f(["\n  from { transform: scale(2); }\n  to { transform: scale(1); }\n"],["\n  from { transform: scale(2); }\n  to { transform: scale(1); }\n"]))),gt=r.keyframes(en||(en=f(["\n  from { transform: scale(1); }\n  to { transform: scale(2); }\n"],["\n  from { transform: scale(1); }\n  to { transform: scale(2); }\n"]))),dt=r.keyframes(sn||(sn=f(["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(360deg);\n    transform-origin: center center;\n  }\n"],["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(360deg);\n    transform-origin: center center;\n  }\n"]))),yt=r.keyframes(fn||(fn=f(["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(-360deg);\n    transform-origin: center center;\n  }\n"],["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(-360deg);\n    transform-origin: center center;\n  }\n"]))),xt={blur:Xn,bounce:Yn,effect3D:hn,flash:kn,float:bn,glowing:wn,jelly:On,pulse:vn,shadow:Tn,spin:Zn,swing:In,fadeIn:jn,fadeInFromLeft:Fn,fadeInFromRight:En,fadeInFromTop:Sn,fadeInFromBottom:zn,fadeOut:Pn,fadeOutToLeft:Rn,fadeOutToRight:Bn,fadeOutToTop:Cn,fadeOutToBottom:Ln,flip:_n,flipIn:Gn,flipOut:Jn,flipSlowDown:Kn,flipFromTop:$n,flipToTop:Qn,flipFromBottom:nt,flipToBottom:Un,flipFromLeftToCenter:tt,fold:ct,unfold:lt,hangOnLeft:qn,hangOnRight:Nn,rotateSlowDown:r.keyframes(mn||(mn=f(["\n  0% { transform:rotateZ(0deg);  }\n  5% { transform: rotateZ(1turn); }\n  10% { transform: rotateZ(2turn); }\n  20% { transform: rotateZ(3turn); }\n  40% { transform: rotateZ(4turn); }\n  65%, 100% { transform: rotateZ(5turn); }\n"],["\n  0% { transform:rotateZ(0deg);  }\n  5% { transform: rotateZ(1turn); }\n  10% { transform: rotateZ(2turn); }\n  20% { transform: rotateZ(3turn); }\n  40% { transform: rotateZ(4turn); }\n  65%, 100% { transform: rotateZ(5turn); }\n"]))),rotateCW:dt,rotateACW:yt,shakeMix:Dn,shakeHorizontal:Hn,shakeVertical:Vn,squeezeMix:An,squeezeHorizontal:Mn,squeezeVertical:Wn,slideInFromLeft:rt,slideInFromRight:at,slideOutToLeft:ot,slideOutToRight:et,slideInFromTop:st,slideInFromBottom:ft,slideOutToTop:mt,slideOutToBottom:it,zoomIn:pt,zoomOut:gt,popIn:r.keyframes(cn||(cn=f(["\n  0% {\n    transform: scale3d(0, 0, 0);\n    opacity: 0;\n  }\n  30% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  60% { transform: scale3d(1, 1, 1); }\n  80% { transform: scale3d(1.03, 1.03, 1.03); }\n  100% { transform: scale3d(1, 1, 1); }\n"],["\n  0% {\n    transform: scale3d(0, 0, 0);\n    opacity: 0;\n  }\n  30% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  60% { transform: scale3d(1, 1, 1); }\n  80% { transform: scale3d(1.03, 1.03, 1.03); }\n  100% { transform: scale3d(1, 1, 1); }\n"]))),popOut:r.keyframes(ln||(ln=f(["\n  0% { transform: scale3d(1, 1, 1); }\n  60% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n"],["\n  0% { transform: scale3d(1, 1, 1); }\n  60% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n"]))),typewriter:r.keyframes(pn||(pn=f([""],[""])))},ut=e.default.div(gn||(gn=f(["\n    margin: 0;\n    padding: 0;\n    animation-name: ",";\n    animation-duration: ",";\n    animation-timing-function: ",";\n    animation-delay: ",";\n    animation-iteration-count: ",";\n    animation-direction: ",";\n    animation-fill-mode: ",";\n"],["\n    margin: 0;\n    padding: 0;\n    animation-name: ",";\n    animation-duration: ",";\n    animation-timing-function: ",";\n    animation-delay: ",";\n    animation-iteration-count: ",";\n    animation-direction: ",";\n    animation-fill-mode: ",";\n"])),(function(n){return xt[n.type||"blur"]||null}),(function(n){return n.duration||"1s"}),(function(n){return n.timing||"ease"}),(function(n){return n.delay||"0s"}),(function(n){return n.iteration||"infinite"}),(function(n){return n.direction||"alternate"}),(function(n){return n.fillMode||"forwards"}));n.Animate=un,n.AnimateTyping=xn,n.default=un,Object.defineProperty(n,"__esModule",{value:!0})}));