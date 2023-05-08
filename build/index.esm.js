import n,{useState as t,useEffect as r}from"react";import a,{keyframes as o}from"styled-components";var e=function(){return e=Object.assign||function(n){for(var t,r=1,a=arguments.length;r<a;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n},e.apply(this,arguments)};function s(n,t){return Object.defineProperty?Object.defineProperty(n,"raw",{value:t}):n.raw=t,n}var f,m,i,c,l,p,g,d,y,x,X,u,Y,h,b,w,O,Z,v,T,I,F,j,z,E,B,C,L,P,N,R,S,W,k,q,A,D,M,H,V,G,J,K,Q,U,$,_,nn,tn,rn,an,on,en,sn,fn,mn,cn,ln,pn,gn=o(f||(f=s(["\n  50% {\n    border-color: transparent;\n  }\n"],["\n  50% {\n    border-color: transparent;\n  }\n"]))),dn=a.span(m||(m=s(["\n    margin-left: 2px;\n    border-left: 3px solid ",";\n    animation: "," 0.7s steps(1) infinite;\n"],["\n    margin-left: 2px;\n    border-left: 3px solid ",";\n    animation: "," 0.7s steps(1) infinite;\n"])),(function(n){return n.cursorColor}),gn),yn=function(a){var o=a.heading,e=void 0===o?"":o,s=a.dataText,f=void 0===s?[]:s,m=a.className,i=a.cursorColor,c=t(""),l=c[0],p=c[1],g=t(!1),d=g[0],y=g[1],x=t(0),X=x[0],u=x[1],Y=t(150),h=Y[0],b=Y[1];r((function(){var n=setTimeout((function(){w()}),h);return function(){return clearTimeout(n)}}));var w=function(){var n=X%f.length,t=f[n],r=d?-1:1;p(t.substring(0,l.length+r)),b(d?30:150),d||l!==t?d&&""===l&&(y(!1),u(X+1)):setTimeout((function(){return y(!0)}),500)};return n.createElement("div",{className:m},e&&n.createElement(n.Fragment,null,e," "),n.createElement("span",null,l),n.createElement(dn,{cursorColor:i}))},xn=function(t){var r=t.children,a=t.className,o=t.type,s=void 0===o?null:o,f=t.typingWrite,m=void 0===f?{}:f,i=function(n,t){var r={};for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&t.indexOf(a)<0&&(r[a]=n[a]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(a=Object.getOwnPropertySymbols(n);o<a.length;o++)t.indexOf(a[o])<0&&Object.prototype.propertyIsEnumerable.call(n,a[o])&&(r[a[o]]=n[a[o]])}return r}(t,["children","className","type","typingWrite"]);return"typewriter"===s?n.createElement(yn,e({},m)):n.createElement(xt,e({className:a,type:s},i),r)},Xn=o(i||(i=s(["\n  from { filter: blur(0px); }\n  to { filter: blur(6px); }\n"],["\n  from { filter: blur(0px); }\n  to { filter: blur(6px); }\n"]))),un=o(c||(c=s(["\n  10% { transform: scaleY(0.9) translateY(5%); }\n  45% { transform: scaleY(1.2) translateY(-100%); }\n  65% { transform: scaleY(0.95) translateY(0); }\n  75% { transform: scaleY(1.05) translateY(-25%); }\n  85% { transform: scaleY(1) translateY(0); }\n  100% { transform: scaleY(1) translateY(0%); }\n"],["\n  10% { transform: scaleY(0.9) translateY(5%); }\n  45% { transform: scaleY(1.2) translateY(-100%); }\n  65% { transform: scaleY(0.95) translateY(0); }\n  75% { transform: scaleY(1.05) translateY(-25%); }\n  85% { transform: scaleY(1) translateY(0); }\n  100% { transform: scaleY(1) translateY(0%); }\n"]))),Yn=o(l||(l=s(["\n  to {\n    text-shadow:\n    0 1px 0 #ccc,\n    0 2px 0 #c9c9c9,\n    0 3px 0 #bbb,\n    0 4px 0 #b9b9b9,\n    0 5px 0 #aaa,\n    0 6px 1px rgba(0, 0, 0, .1),\n    0 0 5px rgba(0, 0, 0, .1),\n    0 1px 3px rgba(0, 0, 0, .3),\n    0 3px 5px rgba(0, 0, 0, .2),\n    0 5px 10px rgba(0, 0, 0, .25)\n  }\n"],["\n  to {\n    text-shadow:\n    0 1px 0 #ccc,\n    0 2px 0 #c9c9c9,\n    0 3px 0 #bbb,\n    0 4px 0 #b9b9b9,\n    0 5px 0 #aaa,\n    0 6px 1px rgba(0, 0, 0, .1),\n    0 0 5px rgba(0, 0, 0, .1),\n    0 1px 3px rgba(0, 0, 0, .3),\n    0 3px 5px rgba(0, 0, 0, .2),\n    0 5px 10px rgba(0, 0, 0, .25)\n  }\n"]))),hn=o(p||(p=s(["\n  0%, 40%, 80% { opacity: 1; }\n  20%, 60%, 100% { opacity: 0; }\n"],["\n  0%, 40%, 80% { opacity: 1; }\n  20%, 60%, 100% { opacity: 0; }\n"]))),bn=o(g||(g=s(["\n  0% { transform: translate(2%, -10%) rotate(-1deg); }\n  100% { transform: translate(-2%, 5%) rotate(3deg); }\n"],["\n  0% { transform: translate(2%, -10%) rotate(-1deg); }\n  100% { transform: translate(-2%, 5%) rotate(3deg); }\n"]))),wn=o(d||(d=s(["\n  0% { color: inherit; text-shadow: none; }\n  2%, 59%, 64%, 79% { color: #fff; }\n  3%, 59%, 63%, 78% { text-shadow: 0px 0px 60px, 0 0 22px, 0 0 1em inherit, 0 0 0.5em inherit, 0 0 .1em inherit, 0 10px 3px #000; }\n  60% { color: inherit; text-shadow: none; }\n  75% { color: inherit; text-shadow: none; }\n"],["\n  0% { color: inherit; text-shadow: none; }\n  2%, 59%, 64%, 79% { color: #fff; }\n  3%, 59%, 63%, 78% { text-shadow: 0px 0px 60px, 0 0 22px, 0 0 1em inherit, 0 0 0.5em inherit, 0 0 .1em inherit, 0 10px 3px #000; }\n  60% { color: inherit; text-shadow: none; }\n  75% { color: inherit; text-shadow: none; }\n"]))),On=o(y||(y=s(["\n  0% { transform: scaleX(1); }\n  20% { transform: scaleX(0.9); }\n  50% { transform: scaleX(1.25); }\n  85% { transform: scaleX(0.8); }\n  100% { transform: scaleX(1); }\n"],["\n  0% { transform: scaleX(1); }\n  20% { transform: scaleX(0.9); }\n  50% { transform: scaleX(1.25); }\n  85% { transform: scaleX(0.8); }\n  100% { transform: scaleX(1); }\n"]))),Zn=o(x||(x=s(["\n  from { transform: scale(1); }\n  to { transform: scale(1.1); }\n"],["\n  from { transform: scale(1); }\n  to { transform: scale(1.1); }\n"]))),vn=o(X||(X=s(["\n  0%   { text-shadow: 1px 1px 0px #333; }\n\t50%   { text-shadow: 3px 3px 2px #333; }\n\t100%  { text-shadow: 9px 10px 6px #999; }\n"],["\n  0%   { text-shadow: 1px 1px 0px #333; }\n\t50%   { text-shadow: 3px 3px 2px #333; }\n\t100%  { text-shadow: 9px 10px 6px #999; }\n"]))),Tn=o(u||(u=s(["\n  from { transform: rotateY(0deg); }\n  to { transform: rotateY(-360deg); }\n"],["\n  from { transform: rotateY(0deg); }\n  to { transform: rotateY(-360deg); }\n"]))),In=o(Y||(Y=s(["\n  0% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n  20% {\n    transform: rotateZ(15deg);\n    transform-origin: center top;\n  }\n  40% {\n    transform: rotateZ(-15deg);\n    transform-origin: center top;\n  }\n  60% {\n    transform: rotateZ(7deg);\n    transform-origin: center top;\n  }\n  80% {\n    transform: rotateZ(-7deg);\n    transform-origin: center top;\n  }\n  100% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n"],["\n  0% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n  20% {\n    transform: rotateZ(15deg);\n    transform-origin: center top;\n  }\n  40% {\n    transform: rotateZ(-15deg);\n    transform-origin: center top;\n  }\n  60% {\n    transform: rotateZ(7deg);\n    transform-origin: center top;\n  }\n  80% {\n    transform: rotateZ(-7deg);\n    transform-origin: center top;\n  }\n  100% {\n    transform: rotateZ(0deg);\n    transform-origin: center top;\n  }\n"]))),Fn=o(h||(h=s(["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"],["\n  from { opacity: 0; }\n  to { opacity: 1; }\n"]))),jn=o(b||(b=s(["\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  to { opacity: 1 }\n"]))),zn=o(w||(w=s(["\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  to { opacity: 1 }\n"]))),En=o(O||(O=s(["\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  to { opacity: 1 }\n"]))),Bn=o(Z||(Z=s(["\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to { opacity: 1 }\n"],["\n  from {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  to { opacity: 1 }\n"]))),Cn=o(v||(v=s(["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"],["\n  from { opacity: 1; }\n  to { opacity: 0; }\n"]))),Ln=o(T||(T=s(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"]))),Pn=o(I||(I=s(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"]))),Nn=o(F||(F=s(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"]))),Rn=o(j||(j=s(["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"],["\n  from { opacity: 1; }\n  to {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"]))),Sn=o(z||(z=s(["\n  0% { transform-origin: left; }\n  30% {\n    transform: rotate(110deg);\n    transform-origin: left;\n  }\n  50% {\n    transform: rotate(75deg);\n    transform-origin: left;\n  }\n  65% {\n    transform: rotate(100deg);\n    transform-origin: left;\n  }\n  78% {\n    transform: rotate(80deg);\n    transform-origin: left;\n  }\n  88% {\n    transform: rotate(95deg);\n    transform-origin: left;\n  }\n  95% {\n    transform: rotate(86deg);\n    transform-origin: left;\n  }\n  100% {\n    transform: rotate(90deg);\n    transform-origin: left;\n  }\n"],["\n  0% { transform-origin: left; }\n  30% {\n    transform: rotate(110deg);\n    transform-origin: left;\n  }\n  50% {\n    transform: rotate(75deg);\n    transform-origin: left;\n  }\n  65% {\n    transform: rotate(100deg);\n    transform-origin: left;\n  }\n  78% {\n    transform: rotate(80deg);\n    transform-origin: left;\n  }\n  88% {\n    transform: rotate(95deg);\n    transform-origin: left;\n  }\n  95% {\n    transform: rotate(86deg);\n    transform-origin: left;\n  }\n  100% {\n    transform: rotate(90deg);\n    transform-origin: left;\n  }\n"]))),Wn=o(E||(E=s(["\n  0% { transform-origin: right; }\n  30% {\n    transform: rotate(-110deg);\n    transform-origin: right;\n  }\n  50% {\n    transform: rotate(-75deg);\n    transform-origin: right;\n  }\n  65% {\n    transform: rotate(-100deg);\n    transform-origin: right;\n  }\n  78% {\n    transform: rotate(-80deg);\n    transform-origin: right;\n  }\n  88% {\n    transform: rotate(-95deg);\n    transform-origin: right;\n  }\n  95% {\n    transform: rotate(-86deg);\n    transform-origin: right;\n  }\n  100% {\n    transform: rotate(-90deg);\n    transform-origin: right;\n  }\n"],["\n  0% { transform-origin: right; }\n  30% {\n    transform: rotate(-110deg);\n    transform-origin: right;\n  }\n  50% {\n    transform: rotate(-75deg);\n    transform-origin: right;\n  }\n  65% {\n    transform: rotate(-100deg);\n    transform-origin: right;\n  }\n  78% {\n    transform: rotate(-80deg);\n    transform-origin: right;\n  }\n  88% {\n    transform: rotate(-95deg);\n    transform-origin: right;\n  }\n  95% {\n    transform: rotate(-86deg);\n    transform-origin: right;\n  }\n  100% {\n    transform: rotate(-90deg);\n    transform-origin: right;\n  }\n"]))),kn=o(B||(B=s(["\n  0% { transform: scale(1, 1); }\n  15% { transform: scale(0.95, 0.95); }\n  30% { transform: scale(0.9, 0.9); }\n  55% { transform: scale(0.75, 0.75); }\n  70% { transform: scale(1.3, 1.3); }\n  85% { transform: scale(0.95, 0.95); }\n  100% { transform: scale(1, 1); }\n"],["\n  0% { transform: scale(1, 1); }\n  15% { transform: scale(0.95, 0.95); }\n  30% { transform: scale(0.9, 0.9); }\n  55% { transform: scale(0.75, 0.75); }\n  70% { transform: scale(1.3, 1.3); }\n  85% { transform: scale(0.95, 0.95); }\n  100% { transform: scale(1, 1); }\n"]))),qn=o(C||(C=s(["\n  0% { transform: scaleX(1); }\n  15% { transform: scaleX(0.95); }\n  30% { transform: scaleX(0.9); }\n  55% { transform: scaleX(0.75); }\n  70% { transform: scaleX(1.3); }\n  85% { transform: scaleX(0.95); }\n  100% { transform: scaleX(1); }\n"],["\n  0% { transform: scaleX(1); }\n  15% { transform: scaleX(0.95); }\n  30% { transform: scaleX(0.9); }\n  55% { transform: scaleX(0.75); }\n  70% { transform: scaleX(1.3); }\n  85% { transform: scaleX(0.95); }\n  100% { transform: scaleX(1); }\n"]))),An=o(L||(L=s(["\n  0% { transform: scaleY(1); }\n  15% { transform: scaleY(0.95); }\n  30% { transform: scaleY(0.9); }\n  55% { transform: scaleY(0.75); }\n  70% { transform: scaleY(1.3); }\n  85% { transform: scaleY(0.95); }\n  100% { transform: scaleY(1); }\n"],["\n  0% { transform: scaleY(1); }\n  15% { transform: scaleY(0.95); }\n  30% { transform: scaleY(0.9); }\n  55% { transform: scaleY(0.75); }\n  70% { transform: scaleY(1.3); }\n  85% { transform: scaleY(0.95); }\n  100% { transform: scaleY(1); }\n"]))),Dn=o(P||(P=s(["\n  0% { transform: translate(2px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0px) rotate(1deg); }\n  30% { transform: translate(0px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(2px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(2px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n"],["\n  0% { transform: translate(2px, 1px) rotate(0deg); }\n  10% { transform: translate(-1px, -2px) rotate(-1deg); }\n  20% { transform: translate(-3px, 0px) rotate(1deg); }\n  30% { transform: translate(0px, 2px) rotate(0deg); }\n  40% { transform: translate(1px, -1px) rotate(1deg); }\n  50% { transform: translate(-1px, 2px) rotate(-1deg); }\n  60% { transform: translate(-3px, 1px) rotate(0deg); }\n  70% { transform: translate(2px, 1px) rotate(-1deg); }\n  80% { transform: translate(-1px, -1px) rotate(1deg); }\n  90% { transform: translate(2px, 2px) rotate(0deg); }\n  100% { transform: translate(1px, -2px) rotate(-1deg); }\n"]))),Mn=o(N||(N=s(["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateX(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateX(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateX(-4px) }\n"],["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateX(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateX(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateX(-4px) }\n"]))),Hn=o(R||(R=s(["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateY(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateY(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateY(-4px) }\n"],["\n  5%, 13%, 22%, 31%, 40%, 49%, 58%, 67%, 76%, 85%, 94% { transform: translateY(6px) }\n  10%, 15%, 24%, 33%, 42%, 51%, 60%, 69%, 78%, 87%, 96% { transform: translateY(2px) }\n  15%, 18%, 27%, 36%, 45%, 54%, 63%, 72%, 81%, 90%, 99% { transform: translateY(-4px) }\n"]))),Vn=o(S||(S=s(["\n  0% {\n    transform: perspective(1000px) rotateX(360deg);\n    transform-origin: center;\n  }\n  100% {\n    transform: perspective(1000px) rotateX(0deg);\n    transform-origin: center;\n  }\n"],["\n  0% {\n    transform: perspective(1000px) rotateX(360deg);\n    transform-origin: center;\n  }\n  100% {\n    transform: perspective(1000px) rotateX(0deg);\n    transform-origin: center;\n  }\n"]))),Gn=o(W||(W=s(["\n  0% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n  35% {\n    transform: rotateX(120deg);\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(360deg);\n    opacity: 1;\n  }\n"],["\n  0% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n  35% {\n    transform: rotateX(120deg);\n    opacity: 0;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(360deg);\n    opacity: 1;\n  }\n"]))),Jn=o(k||(k=s(["\n  0% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n  35% {\n    transform: rotateX(-40deg);\n    opacity: 1;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n"],["\n  0% {\n    transform: rotateX(0deg);\n    opacity: 1;\n  }\n  35% {\n    transform: rotateX(-40deg);\n    opacity: 1;\n  }\n  65% {\n    opacity: 0;\n  }\n  100% {\n    transform: rotateX(180deg);\n    opacity: 0;\n  }\n"]))),Kn=o(q||(q=s([" // tbm\n  0% {\n    transform:rotateX(0deg);\n  }\n  5% {\n    transform: rotateX(1turn);\n  }\n  10% {\n    transform: rotateX(2turn);\n  }\n  20% {\n    transform: rotateX(3turn);\n  }\n  40% {\n    transform: rotateX(4turn);\n  }\n  70%, 100% {\n    transform: rotateX(5turn);\n  }\n"],[" // tbm\n  0% {\n    transform:rotateX(0deg);\n  }\n  5% {\n    transform: rotateX(1turn);\n  }\n  10% {\n    transform: rotateX(2turn);\n  }\n  20% {\n    transform: rotateX(3turn);\n  }\n  40% {\n    transform: rotateX(4turn);\n  }\n  70%, 100% {\n    transform: rotateX(5turn);\n  }\n"]))),Qn=o(A||(A=s(["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: center top;\n    opacity: 1;\n  }\n  to {\n    transform: rotateX(90deg);\n    transform-origin: center top;\n    opacity: 0;\n  }\n"],["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: center top;\n    opacity: 1;\n  }\n  to {\n    transform: rotateX(90deg);\n    transform-origin: center top;\n    opacity: 0;\n  }\n"]))),Un=o(D||(D=s(["\n  from {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(-90deg) translateY(50px);\n  }\n"],["\n  from {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) translateY(0px);\n  }\n  to {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(-90deg) translateY(50px);\n  }\n"]))),$n=o(M||(M=s(["\n  from {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(90deg);\n  }\n  to {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) ;\n  }\n"],["\n  from {\n    opacity: 0;\n    transform-origin: 0%, 0%;\n    transform: rotateX(90deg);\n  }\n  to {\n    opacity: 1;\n    transform-origin: 0%, 0%;\n    transform: rotateX(0deg) ;\n  }\n"]))),_n=o(H||(H=s(["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: 50% 0;\n    opacity: 0;\n  }\n  to {\n    transform: rotateX(0deg);\n    transform-origin: 50% 0;\n    opacity: 1;\n  }\n"],["\n  from {\n    transform: rotateX(-90deg);\n    transform-origin: 50% 0;\n    opacity: 0;\n  }\n  to {\n    transform: rotateX(0deg);\n    transform-origin: 50% 0;\n    opacity: 1;\n  }\n"]))),nt=o(V||(V=s(["\n  0% {\n    transform: rotateY(-95deg)  translateX(-200px) ;\n    transform-origin: left;\n  }\n  100% {\n    transform: rotateY(0deg);\n    transform-origin: left;\n  }\n"],["\n  0% {\n    transform: rotateY(-95deg)  translateX(-200px) ;\n    transform-origin: left;\n  }\n  100% {\n    transform: rotateY(0deg);\n    transform-origin: left;\n  }\n"]))),tt=o(G||(G=s(["\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),rt=o(J||(J=s(["\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateX(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n"]))),at=o(K||(K=s(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-100%);\n  }\n"]))),ot=o(Q||(Q=s(["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateX(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateX(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(100%);\n  }\n"]))),et=o(U||(U=s(["\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(-20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),st=o($||($=s(["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"],["\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  60% {\n    opacity: 1;\n    transform: translateY(20%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n"]))),ft=o(_||(_=s(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(-120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n"]))),mt=o(nn||(nn=s(["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"],["\n  0% {\n    opacity: 1;\n    transform: translateY(0);\n  }\n  60% {\n    opacity: 0;\n    transform: translateY(120%);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(100%);\n  }\n"]))),it=o(tn||(tn=s(["\n  0% { transform: scale3d(1, 1, 1); }\n  30% { transform: scale3d(1, 0.4, 1); }\n  60% { transform: scale3d(0.4, 0.4, 1); }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n  }\n"],["\n  0% { transform: scale3d(1, 1, 1); }\n  30% { transform: scale3d(1, 0.4, 1); }\n  60% { transform: scale3d(0.4, 0.4, 1); }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.2, 0.2, 0.2);\n  }\n"]))),ct=o(rn||(rn=s(["\n  0% {\n    opacity: 0;\n    transform: scale3d(0, 0, 0); }\n  30% {\n    opacity: 1;\n    transform: scale3d(0.4, 0.4, 1);\n  }\n  60% { transform: scale3d(0.4, 1, 1); }\n  100% { transform: scale3d(1, 1, 1); }\n"],["\n  0% {\n    opacity: 0;\n    transform: scale3d(0, 0, 0); }\n  30% {\n    opacity: 1;\n    transform: scale3d(0.4, 0.4, 1);\n  }\n  60% { transform: scale3d(0.4, 1, 1); }\n  100% { transform: scale3d(1, 1, 1); }\n"]))),lt=o(an||(an=s(["\n  from { transform: scale(2); }\n  to { transform: scale(1); }\n"],["\n  from { transform: scale(2); }\n  to { transform: scale(1); }\n"]))),pt=o(on||(on=s(["\n  from { transform: scale(1); }\n  to { transform: scale(2); }\n"],["\n  from { transform: scale(1); }\n  to { transform: scale(2); }\n"]))),gt=o(en||(en=s(["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(360deg);\n    transform-origin: center center;\n  }\n"],["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(360deg);\n    transform-origin: center center;\n  }\n"]))),dt=o(sn||(sn=s(["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(-360deg);\n    transform-origin: center center;\n  }\n"],["\n  from {\n    transform: rotate(0deg);\n    transform-origin: center center;\n  }\n  to {\n    transform: rotate(-360deg);\n    transform-origin: center center;\n  }\n"]))),yt={blur:Xn,bounce:un,effect3D:Yn,flash:hn,float:bn,glowing:wn,jelly:On,pulse:Zn,shadow:vn,spin:Tn,swing:In,fadeIn:Fn,fadeInFromLeft:jn,fadeInFromRight:zn,fadeInFromTop:En,fadeInFromBottom:Bn,fadeOut:Cn,fadeOutToLeft:Ln,fadeOutToRight:Pn,fadeOutToTop:Nn,fadeOutToBottom:Rn,flip:Vn,flipIn:Gn,flipOut:Jn,flipSlowDown:Kn,flipFromTop:$n,flipToTop:Qn,flipFromBottom:_n,flipToBottom:Un,flipFromLeftToCenter:nt,fold:it,unfold:ct,hangOnLeft:Sn,hangOnRight:Wn,rotateSlowDown:o(fn||(fn=s(["\n  0% { transform:rotateZ(0deg);  }\n  5% { transform: rotateZ(1turn); }\n  10% { transform: rotateZ(2turn); }\n  20% { transform: rotateZ(3turn); }\n  40% { transform: rotateZ(4turn); }\n  65%, 100% { transform: rotateZ(5turn); }\n"],["\n  0% { transform:rotateZ(0deg);  }\n  5% { transform: rotateZ(1turn); }\n  10% { transform: rotateZ(2turn); }\n  20% { transform: rotateZ(3turn); }\n  40% { transform: rotateZ(4turn); }\n  65%, 100% { transform: rotateZ(5turn); }\n"]))),rotateCW:gt,rotateACW:dt,shakeMix:Dn,shakeHorizontal:Mn,shakeVertical:Hn,squeezeMix:kn,squeezeHorizontal:qn,squeezeVertical:An,slideInFromLeft:tt,slideInFromRight:rt,slideOutToLeft:at,slideOutToRight:ot,slideInFromTop:et,slideInFromBottom:st,slideOutToTop:ft,slideOutToBottom:mt,zoomIn:lt,zoomOut:pt,popIn:o(mn||(mn=s(["\n  0% {\n    transform: scale3d(0, 0, 0);\n    opacity: 0;\n  }\n  30% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  60% { transform: scale3d(1, 1, 1); }\n  80% { transform: scale3d(1.03, 1.03, 1.03); }\n  100% { transform: scale3d(1, 1, 1); }\n"],["\n  0% {\n    transform: scale3d(0, 0, 0);\n    opacity: 0;\n  }\n  30% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  60% { transform: scale3d(1, 1, 1); }\n  80% { transform: scale3d(1.03, 1.03, 1.03); }\n  100% { transform: scale3d(1, 1, 1); }\n"]))),popOut:o(cn||(cn=s(["\n  0% { transform: scale3d(1, 1, 1); }\n  60% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n"],["\n  0% { transform: scale3d(1, 1, 1); }\n  60% {\n    transform: scale3d(1.1, 1.1, 1.1);\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n    transform: scale3d(0.3, 0.3, 0.3);\n  }\n"]))),typewriter:o(ln||(ln=s([""],[""])))},xt=a.div(pn||(pn=s(["\n    margin: 0;\n    padding: 0;\n    animation-name: ",";\n    animation-duration: ",";\n    animation-timing-function: ",";\n    animation-delay: ",";\n    animation-iteration-count: ",";\n    animation-direction: ",";\n    animation-fill-mode: ",";\n"],["\n    margin: 0;\n    padding: 0;\n    animation-name: ",";\n    animation-duration: ",";\n    animation-timing-function: ",";\n    animation-delay: ",";\n    animation-iteration-count: ",";\n    animation-direction: ",";\n    animation-fill-mode: ",";\n"])),(function(n){return yt[n.type||"blur"]||null}),(function(n){return n.duration||"1s"}),(function(n){return n.timing||"ease"}),(function(n){return n.delay||"0s"}),(function(n){return n.iteration||"infinite"}),(function(n){return n.direction||"alternate"}),(function(n){return n.fillMode||"forwards"}));export{xn as Animate,yn as AnimateTyping,xn as default};