import{jsx as t,jsxs as r,Fragment as a}from"react/jsx-runtime";import o,{keyframes as e,css as s}from"styled-components";import{useState as n,useMemo as f,useRef as m,useEffect as l}from"react";const i={bounce:"1s",bounceIn:"1s",bounceOut:"1s",bounceElastic:"1.2s",bounceSmall:"0.8s",bounceRotate:"1s",bounceJelly:"1.2s",jelly:"1s",jellyX:"1s",jellyY:"1s",jellyIn:"1s",jellyOut:"1s",shakeMix:"0.8s",shakeHorizontal:"0.8s",shakeVertical:"0.8s",shakeDiagonal:"0.8s",shakeQuick:"0.5s",pulse:"1s",pulseInOut:"1.2s",pulseFade:"1.2s",pulseFast:"0.6s",pulseColor:"1.2s",heartBeat:"1.3s",float:"2s",floatSway:"2.5s",floatHorizontal:"2.5s",floatCircular:"3s",floatWiggle:"2s",orbit:"3s",orbitEllipse:"3s",flash:"0.8s",flashIrregular:"1.2s",flashFast:"0.5s",flashSlow:"1.5s",flashPulse:"1s",glow:"1.5s",glowTextFlicker:"2s",glowRainbow:"3s",glowBreathing:"2.5s",glowGlitch:"1.2s",blurIn:"0.8s",blurInZoom:"1s",blurInScale:"0.8s",blurInUp:"0.8s",blurInRotate:"1s",blurOut:"0.8s",blurOutZoom:"1s",blurOutScale:"0.8s",blurOutDown:"0.8s",blurOutRotate:"1s",fadeIn:"0.8s",fadeOut:"0.8s",fadeInFromLeft:"0.8s",fadeInFromRight:"0.8s",fadeInFromTop:"0.8s",fadeInFromBottom:"0.8s",fadeOutToLeft:"0.8s",fadeOutToRight:"0.8s",fadeOutToTop:"0.8s",fadeOutToBottom:"0.8s",fadeInZoom:"1s",fadeOutZoom:"1s",fadeInRotate:"1s",fadeOutRotate:"1s",fadeInSkew:"0.8s",fadeOutSkew:"0.8s",fadeInFlipX:"1s",fadeOutFlipX:"1s",fadeInFlipY:"1s",fadeOutFlipY:"1s",fadeInPerspective:"1s",fadeOutPerspective:"1s",slideInFromLeft:"0.8s",slideInFromRight:"0.8s",slideOutToLeft:"0.8s",slideOutToRight:"0.8s",slideInFromTop:"0.8s",slideInFromBottom:"0.8s",slideOutToTop:"0.8s",slideOutToBottom:"0.8s",slideInFromLeftOvershoot:"1s",slideInFromRightOvershoot:"1s",slideOutToLeftOvershoot:"1s",slideOutToRightOvershoot:"1s",slideInFromTopOvershoot:"1s",slideInFromBottomOvershoot:"1s",slideOutToTopOvershoot:"1s",slideOutToBottomOvershoot:"1s",zoomIn:"1s",zoomOut:"1s",zoomInFromLeft:"1s",zoomInFromRight:"1s",zoomInFromTop:"1s",zoomInFromBottom:"1s",zoomOutToLeft:"1s",zoomOutToRight:"1s",zoomOutToTop:"1s",zoomOutToBottom:"1s",spin:"2s",spin3D:"2.5s",spinX:"2s",spinBounce:"2s",rotateCW:"1.5s",rotateACW:"1.5s",rotateSlowDown:"2.5s",rotateX:"2s",rotateY:"2s",rotateFromLeft:"1s",rotateFromRight:"1s",rotateToLeft:"1s",rotateToRight:"1s",rotateFromTop:"1s",rotateFromBottom:"1s",rotateToTop:"1s",rotateToBottom:"1s",flip:"1s",flipIn:"1s",flipOut:"1s",flipSlowDown:"1.5s",flipToLeft:"1s",flipToRight:"1s",flipFromTop:"1s",flipToTop:"1s",flipToBottom:"1s",flipFromBottom:"1s",flipFromLeftToCenter:"1s",flipFromRightToCenter:"1s",flipRich:"1.2s",flipToTopRich:"1.2s",flipToBottomRich:"1.2s",flipToTopLeftRich:"1.2s",flipToRightRich:"1.2s",flipFromTopRich:"1.2s",flipFromBottomRich:"1.2s",flipFromLeftToCenterRich:"1.2s",flipFromRightToCenterRich:"1.2s",fold:"1s",foldDeep:"1.2s",unfold:"1s",unfoldDeep:"1.2s",hangOnLeft:"1.5s",hangOnRight:"1.5s",hangOnTop:"1.5s",hangOnBottom:"1.5s",hangOnLeftSwing:"2s",hangOnRightSwing:"2s",hangOnTopSwing:"2s",hangOnBottomSwing:"2s",hangOnOscillate:"2.5s",hangOnDrop:"1.5s",effect3D:"1.2s",neonGlow:"1.5s",retro3D:"1.5s",emboss:"1s",fireGlow:"1.8s",iceGlow:"1.8s",shine:"1.2s",shadow:"1.2s",shadowText:"1.2s",shadowPulse:"1.2s",shadowNeon:"1.2s",swing:"1s",swingPivot:"1s",swingX:"1s",swingY:"1s",squeezeMix:"1s",squeezeHorizontal:"1s",squeezeVertical:"1s",squeezeDiagonal:"1s",squeezePulse:"1s",tada:"1s",hinge:"2s",lightSpeedInLeft:"1s",lightSpeedOutRight:"1s",popIn:"0.8s",popOut:"0.8s",popBounceIn:"1s",popBounceOut:"1s",popUpIn:"0.8s",popUpOut:"0.8s",popRotateIn:"1s",popRotateOut:"1s",popBlurIn:"1s",popBlurOut:"1s",popLeftIn:"0.8s",popLeftOut:"0.8s",popRightIn:"0.8s",popRightOut:"0.8s",rubberBand:"1s",jello:"1s",wobble:"1s",rollIn:"1s",jackInTheBox:"1.2s",typing:"2s",typingLoop:"2.5s",typeWriter:"3s",typeDelete:"1.5s",typeFade:"2s",textFlicker:"2s",textScramble:"2.5s",bgFade:"2s",bgSlide:"3s",bgPulse:"2.5s",gradientShift:"3s",gradientWave:"3.5s",colorCycle:"2s",rainbowCycle:"3s",morph:"2s",morphBlob:"3s",morphSquareCircle:"2.5s",morphLiquid:"3.5s",borderPulse:"1.5s",borderExpand:"1.2s",borderShrink:"1.2s",scaleUp:"0.8s",scaleDown:"0.8s",stretchX:"1s",stretchY:"1s",revealUp:"1s",revealDown:"1s",revealLeft:"1s",revealRight:"1s",parallax:"3s",scrollWipe:"1.2s",attentionSeeker:"1s",comboZoomRotate:"1.5s",comboBounceFade:"1.5s",comboSlideSpin:"1.5s",complexMorph:"2.5s"},p=e`
  from { transform: scale3d(1,1,1); }
  30% { transform: scale3d(1.25,.75,1); }
  40% { transform: scale3d(.75,1.25,1); }
  50% { transform: scale3d(1.15,.85,1); }
  65% { transform: scale3d(.95,1.05,1); }
  75% { transform: scale3d(1.05,.95,1); }
  to { transform: scale3d(1,1,1); }
`,c=e`
  from, 11.1%, to { transform: none; }
  22.2% { transform: skewX(-12.5deg) skewY(-12.5deg) scale3d(1,1,1); }
  33.3% { transform: skewX(6.25deg) skewY(6.25deg) scale3d(1,1,1); }
  44.4% { transform: skewX(-3.125deg) skewY(-3.125deg) scale3d(1,1,1); }
  55.5% { transform: skewX(1.5625deg) skewY(1.5625deg) scale3d(1,1,1); }
  66.6% { transform: skewX(-.78125deg) skewY(-.78125deg) scale3d(1,1,1); }
  77.7% { transform: skewX(.390625deg) skewY(.390625deg) scale3d(1,1,1); }
  88.8% { transform: skewX(-.1953125deg) skewY(-.1953125deg) scale3d(1,1,1); }
`,d=e`
  from { transform: translate3d(0,0,0) scale3d(1,1,1); }
  15% { transform: translate3d(-25%,0,0) rotate(-5deg) scale3d(1,1,1); }
  30% { transform: translate3d(20%,0,0) rotate(3deg) scale3d(1,1,1); }
  45% { transform: translate3d(-15%,0,0) rotate(-3deg) scale3d(1,1,1); }
  60% { transform: translate3d(10%,0,0) rotate(2deg) scale3d(1,1,1); }
  75% { transform: translate3d(-5%,0,0) rotate(-1deg) scale3d(1,1,1); }
  to { transform: translate3d(0,0,0) scale3d(1,1,1); }
`,g=e`
  from { opacity: 0; transform: translate3d(-100%,0,0) rotate(-120deg) scale3d(1,1,1); }
  to { opacity: 1; transform: translate3d(0,0,0) rotate(0deg) scale3d(1,1,1); }
`,y=e`
  from { opacity: 0; transform: scale3d(.1,.1,.1) rotate(30deg); transform-origin: center bottom; }
  50% { transform: rotate(-10deg) scale3d(.5,.5,.5); }
  70% { transform: rotate(3deg) scale3d(.8,.8,.8); }
  to { opacity: 1; transform: scale3d(1,1,1); }
`,x={rubberBand:p,jello:c,wobble:d,rollIn:g,jackInTheBox:y},u=e`
  from { filter: blur(5px); opacity: 0; }
  to { filter: blur(0); opacity: 1; }
`,h=e`
  from { opacity: 0; transform: scale(0.9); filter: blur(6px); }
  to { opacity: 1; transform: scale(1); filter: blur(0); }
`,Y=e`
  from { opacity: 0; transform: scale(1.1); filter: blur(6px); }
  to { opacity: 1; transform: scale(1); filter: blur(0); }
`,X=e`
  from { opacity: 0; transform: translateY(40px); filter: blur(6px); }
  to { opacity: 1; transform: translateY(0); filter: blur(0); }
`,b=e`
  from { opacity: 0; transform: rotate(-10deg) scale(0.95); filter: blur(6px); }
  to { opacity: 1; transform: rotate(0deg) scale(1); filter: blur(0); }
`,w=e`
  from { filter: blur(0); opacity: 1; }
  to { filter: blur(6px); opacity: 0; }
`,O=e`
  from { opacity: 1; transform: scale(1); filter: blur(0); }
  to { opacity: 0; transform: scale(0.9); filter: blur(6px); }
`,T=e`
  from { opacity: 1; transform: scale(1); filter: blur(0); }
  to { opacity: 0; transform: scale(1.1); filter: blur(6px); }
`,I=e`
  from { opacity: 1; transform: translateY(0); filter: blur(0); }
  to { opacity: 0; transform: translateY(40px); filter: blur(6px); }
`,F=e`
  from { opacity: 1; transform: rotate(0deg) scale(1); filter: blur(0); }
  to { opacity: 0; transform: rotate(10deg) scale(0.95); filter: blur(6px); }
`,k={blurIn:u,blurInZoom:h,blurInScale:Y,blurInUp:X,blurInRotate:b,blurOut:w,blurOutZoom:O,blurOutScale:T,blurOutDown:I,blurOutRotate:F},R=e`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-30px); }
  60% { transform: translateY(-15px); }
`,v=e`
  0% { opacity: 0; transform: scale(.3); }
  50% { opacity: 1; transform: scale(1.05); }
  70% { transform: scale(.9); }
  100% { transform: scale(1); }
`,B=e`
  20% { transform: scale(.9); }
  50%, 55% { opacity: 1; transform: scale(1.1); }
  to { opacity: 0; transform: scale(.3); }
`,S=e`
  10% { transform: scaleY(0.9) translateY(5%); }
  45% { transform: scaleY(1.2) translateY(-100%); }
  65% { transform: scaleY(0.95) translateY(0); }
  75% { transform: scaleY(1.05) translateY(-25%); }
  85%, 100% { transform: scaleY(1) translateY(0); }
`,z=e`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`,L=e`
  0%, 100% { transform: translateY(0) rotate(0deg); }
  40% { transform: translateY(-20px) rotate(-5deg); }
  60% { transform: translateY(-10px) rotate(5deg); }
`,Z=e`
  0%, 100% { transform: scale(1, 1); }
  30% { transform: scale(1.25, 0.75); }
  40% { transform: scale(0.75, 1.25); }
  50% { transform: scale(1.15, 0.85); }
  65% { transform: scale(0.95, 1.05); }
  75% { transform: scale(1.05, 0.95); }
`,D=e`
  0%, 100% { transform: translateX(0); }
  30% { transform: translateX(-20px); }
  60% { transform: translateX(15px); }
`,C=e`
  0%, 100% { transform: translate(0,0); }
  30% { transform: translate(-15px,-20px); }
  60% { transform: translate(12px,15px); }
`,j=e`
  0% { transform: translateY(0) rotateY(0deg); }
  40% { transform: translateY(-25px) rotateY(180deg); }
  70% { transform: translateY(-10px) rotateY(360deg); }
  100% { transform: translateY(0) rotateY(360deg); }
`,P=e`
  0% { opacity: 0; transform: translateY(0); }
  40% { opacity: 1; transform: translateY(-20px); }
  70% { transform: translateY(-10px); }
  100% { opacity: 0; transform: translateY(0); }
`,q=e`
  0% { transform: translateY(0); }
  20% { transform: translateY(-25px) rotate(-5deg); }
  40% { transform: translateY(15px) rotate(5deg); }
  60% { transform: translateY(-20px) rotate(-8deg); }
  80% { transform: translateY(10px) rotate(6deg); }
  100% { transform: translateY(0) rotate(0); }
`,$=e`
  0%, 100% { transform: translateY(0); box-shadow: 0 0 0px rgba(255, 255, 0, 0); }
  40% { transform: translateY(-20px); box-shadow: 0 0 20px rgba(255, 255, 0, 0.8); }
  60% { transform: translateY(-10px); box-shadow: 0 0 10px rgba(255, 255, 0, 0.6); }
`,G=e`
  0% { opacity: 0; transform: scale(0.5) translateY(0); }
  40% { opacity: 1; transform: scale(1.2) translateY(-25px); }
  70% { opacity: 0.8; transform: scale(0.9) translateY(-10px); }
  100% { opacity: 0; transform: scale(0.5) translateY(0); }
`,N=e`
  0% { transform: translateY(0) scale(1); filter: brightness(1); }
  30% { transform: translateY(-20px) scale(1.2); filter: brightness(1.6); }
  60% { transform: translateY(-10px) scale(0.9); filter: brightness(1.2); }
  100% { transform: translateY(0) scale(1); filter: brightness(1); }
`,U=e`
  0% { transform: translateY(0); color: red; }
  25% { transform: translateY(-20px); color: orange; }
  50% { transform: translateY(-10px); color: yellow; }
  75% { transform: translateY(-15px); color: green; }
  100% { transform: translateY(0); color: blue; }
`,W={bounce:R,bounceIn:v,bounceOut:B,bounceElastic:S,bounceSmall:z,bounceRotate:L,bounceJelly:Z,bounceSide:D,bounceDiagonal:C,bounceFlip:j,bounceFade:P,bounceCrazy:q,bounceGlow:$,bounceFadeScale:G,bounceSparkle:N,bounceRainbow:U},M=e`
  from { opacity: 0; }
  to { opacity: 1; }
`,E=e`
  from { opacity: 1; }
  to { opacity: 0; }
`,A=e`
  from { opacity: 0; transform: translateX(-100%); }
  to { opacity: 1; transform: translateX(0); }
`,H=e`
  from { opacity: 0; transform: translateX(100%); }
  to { opacity: 1; transform: translateX(0); }
`,V=e`
  from { opacity: 0; transform: translateY(-100%); }
  to { opacity: 1; transform: translateY(0); }
`,J=e`
  from { opacity: 0; transform: translateY(100%); }
  to { opacity: 1; transform: translateY(0); }
`,Q=e`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(-100%); }
`,K=e`
  from { opacity: 1; transform: translateX(0); }
  to { opacity: 0; transform: translateX(100%); }
`,_=e`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-100%); }
`,tt=e`
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(100%); }
`,rt=e`
  from { opacity: 0; transform: scale(0.5); }
  to { opacity: 1; transform: scale(1); }
`,at=e`
  from { opacity: 1; transform: scale(1); }
  to { opacity: 0; transform: scale(0.5); }
`,ot=e`
  from { opacity: 0; transform: rotate(-45deg); }
  to { opacity: 1; transform: rotate(0); }
`,et=e`
  from { opacity: 1; transform: rotate(0); }
  to { opacity: 0; transform: rotate(45deg); }
`,st=e`
  from { opacity: 0; transform: skewX(-30deg); }
  to { opacity: 1; transform: skewX(0); }
`,nt=e`
  from { opacity: 1; transform: skewX(0); }
  to { opacity: 0; transform: skewX(30deg); }
`,ft=e`
  from { opacity: 0; transform: rotateX(90deg); }
  to { opacity: 1; transform: rotateX(0); }
`,mt=e`
  from { opacity: 1; transform: rotateX(0); }
  to { opacity: 0; transform: rotateX(-90deg); }
`,lt=e`
  from { opacity: 0; transform: rotateY(90deg); }
  to { opacity: 1; transform: rotateY(0); }
`,it=e`
  from { opacity: 1; transform: rotateY(0); }
  to { opacity: 0; transform: rotateY(-90deg); }
`,pt=e`
  from { opacity: 0; transform: perspective(400px) translateZ(-200px); }
  to { opacity: 1; transform: perspective(400px) translateZ(0); }
`,ct=e`
  from { opacity: 1; transform: perspective(400px) translateZ(0); }
  to { opacity: 0; transform: perspective(400px) translateZ(-200px); }
`,dt=e`
  from { opacity: 0; filter: blur(10px); }
  to { opacity: 1; filter: blur(0); }
`,gt=e`
  from { opacity: 1; filter: blur(0); }
  to { opacity: 0; filter: blur(10px); }
`,yt=e`
  from { opacity: 0; filter: hue-rotate(180deg); }
  to { opacity: 1; filter: hue-rotate(0); }
`,xt=e`
  from { opacity: 1; filter: hue-rotate(0); }
  to { opacity: 0; filter: hue-rotate(180deg); }
`,ut=e`
  0%, 100% { opacity: 0.4; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.05); }
`,ht=e`
  0% { opacity: 0; transform: translateY(20px); }
  50% { opacity: 1; transform: translateY(-10px); }
  70% { transform: translateY(5px); }
  100% { transform: translateY(0); }
`,Yt=e`
  0% { opacity: 0; transform: rotate(15deg); }
  50% { opacity: 1; transform: rotate(-15deg); }
  100% { opacity: 1; transform: rotate(0deg); }
`,Xt=e`
  from { opacity: 0; transform: scale(0.5) rotate(-180deg); }
  to { opacity: 1; transform: scale(1) rotate(0); }
`,bt=e`
  0% { opacity: 0; transform: scale(0.5); }
  60% { opacity: 1; transform: scale(1.2); }
  80% { transform: scale(0.9); }
  100% { transform: scale(1); }
`,wt=e`
  0% { opacity: 0; background-position: -200%; }
  100% { opacity: 1; background-position: 200%; }
`,Ot={fadeIn:M,fadeOut:E,fadeInFromLeft:A,fadeInFromRight:H,fadeInFromTop:V,fadeInFromBottom:J,fadeOutToLeft:Q,fadeOutToRight:K,fadeOutToTop:_,fadeOutToBottom:tt,fadeInZoom:rt,fadeOutZoom:at,fadeInRotate:ot,fadeOutRotate:et,fadeInSkew:st,fadeOutSkew:nt,fadeInFlipX:ft,fadeOutFlipX:mt,fadeInFlipY:lt,fadeOutFlipY:it,fadeInPerspective:pt,fadeOutPerspective:ct,fadeInBlur:dt,fadeOutBlur:gt,fadeInColor:yt,fadeOutColor:xt,fadePulse:ut,fadeBounce:ht,fadeSwing:Yt,fadeZoomRotate:Xt,fadeElastic:bt,fadeShine:wt},Tt=e`
  0%, 50%, 100% { opacity: 1; }
  25%, 75% { opacity: 0; }
`,It=e`
  0%, 40%, 80% { opacity: 1; }
  20%, 60%, 100% { opacity: 0; }
`,Ft=e`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,kt=e`
  0% { opacity: 1; }
  45% { opacity: 0; }
  55% { opacity: 0; }
  100% { opacity: 1; }
`,Rt=e`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.3; }
`,vt=e`
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(1.05); }
`,Bt=e`
  0%, 100% { opacity: 1; filter: hue-rotate(0deg); }
  50% { opacity: 0.2; filter: hue-rotate(180deg); }
`,St=e`
  0%, 20%, 40%, 60%, 80%, 100% { opacity: 1; }
  10%, 30%, 50%, 70%, 90% { opacity: 0; }
`,zt=e`
  0% { opacity: 1; }
  50% { opacity: 0.6; }
  100% { opacity: 1; }
`,Lt=e`
  0%, 100% { opacity: 0.3; }
  50% { opacity: 1; }
`,Zt={flash:Tt,flashIrregular:It,flashFast:Ft,flashSlow:kt,flashPulse:Rt,flashGlow:vt,flashColor:Bt,flashStrobe:St,flashSoft:zt,flashReversePulse:Lt},Dt=e`from{transform:rotateY(0)}to{transform:rotateY(180deg)}`,Ct=e`
  from { transform: rotateY(-90deg); }
  to { transform: rotateY(0); }
`,jt=e`
  from { transform: rotateY(90deg); }
  to { transform: rotateY(0); }
`,Pt=e`
  from { transform: rotateY(0); }
  to { transform: rotateY(-90deg); }
`,qt=e`
  from { transform: rotateY(0); }
  to { transform: rotateY(90deg); }
`,$t={...W,...{effect3D:e`
  to {
    text-shadow:
      0 1px 0 #ccc,
      0 2px 0 #c9c9c9,
      0 3px 0 #bbb,
      0 4px 0 #b9b9b9,
      0 5px 0 #aaa,
      0 6px 1px rgba(0, 0, 0, .1),
      0 0 5px rgba(0, 0, 0, .1),
      0 1px 3px rgba(0, 0, 0, .3),
      0 3px 5px rgba(0, 0, 0, .2),
      0 5px 10px rgba(0, 0, 0, .25);
  }
`,neonGlow:e`
  from { text-shadow: none; }
  to {
    text-shadow:
      0 0 5px #0ff,
      0 0 10px #0ff,
      0 0 20px #0ff,
      0 0 40px #0ff,
      0 0 80px #0ff;
    color: #fff;
  }
`,retro3D:e`
  to {
    text-shadow:
      2px 2px 0 #ff0040,
      4px 4px 0 #00ffd5,
      6px 6px 0 #000;
  }
`,emboss:e`
  to {
    text-shadow:
      -1px -1px 1px #fff,
      1px 1px 2px rgba(0,0,0,0.6);
    color: #555;
  }
`,fireGlow:e`
  0%, 100% {
    text-shadow:
      0 0 5px #ff6600,
      0 0 10px #ff3300,
      0 0 20px #ff0000;
  }
  50% {
    text-shadow:
      0 0 10px #ff9933,
      0 0 20px #ff6600,
      0 0 30px #ff3300;
  }
`,iceGlow:e`
  to {
    text-shadow:
      0 0 5px #66ccff,
      0 0 10px #33ccff,
      0 0 20px #00aaff,
      0 0 40px #0099ff;
    color: #e6f9ff;
  }
`,shine:e`
  0% { background-position: -200%; }
  100% { background-position: 200%; }
`},...k,...Zt,...{float:e`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`,floatSway:e`
  0% { transform: translate(2%, -10%) rotate(-1deg); }
  100% { transform: translate(-2%, 5%) rotate(3deg); }
`,floatHorizontal:e`
  0%, 100% { transform: translateX(0); }
  50% { transform: translateX(12px); }
`,floatCircular:e`
  0% { transform: translate(0, 0); }
  25% { transform: translate(8px, -8px); }
  50% { transform: translate(0, -12px); }
  75% { transform: translate(-8px, -8px); }
  100% { transform: translate(0, 0); }
`,floatWiggle:e`
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(-2deg); }
  75% { transform: rotate(1deg); }
`,floatPulse:e`
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-8px) scale(1.05); }
`,floatDiagonal:e`
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(10px, -10px); }
`,floatSwing:e`
  0%, 100% { transform: rotate(0deg) translateY(0); }
  25% { transform: rotate(3deg) translateY(-5px); }
  50% { transform: rotate(-3deg) translateY(-10px); }
  75% { transform: rotate(2deg) translateY(-5px); }
`,floatWave:e`
  0% { transform: translate(0, 0); }
  25% { transform: translate(8px, -6px); }
  50% { transform: translate(0, -12px); }
  75% { transform: translate(-8px, -6px); }
  100% { transform: translate(0, 0); }
`,floatDrift:e`
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(6px, -4px) rotate(1deg); }
  50% { transform: translate(-4px, -8px) rotate(-1deg); }
  75% { transform: translate(-6px, 6px) rotate(2deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
`},...{glow:e`
  0% { box-shadow: 0 0 5px #ff00de; }
  50% { box-shadow: 0 0 20px #ff00de; }
  100% { box-shadow: 0 0 5px #ff00de; }
`,glowTextFlicker:e`
  0% { color: inherit; text-shadow: none; }
  2%, 59%, 64%, 79% { color: #fff; }
  3%, 59%, 63%, 78% {
    text-shadow:
      0px 0px 60px,
      0 0 22px,
      0 0 1em inherit,
      0 0 0.5em inherit,
      0 0 .1em inherit,
      0 10px 3px #000;
  }
  60%, 75% { color: inherit; text-shadow: none; }
`,glowRainbow:e`
  0% { filter: hue-rotate(0deg); }
  100% { filter: hue-rotate(360deg); }
`,glowBreathing:e`
  0%, 100% { text-shadow: 0 0 5px #00f, 0 0 10px #00f; }
  50% { text-shadow: 0 0 20px #00f, 0 0 40px #00f; }
`,glowGlitch:e`
  0%, 100% { text-shadow: 0 0 5px #0ff, 0 0 10px #0ff; }
  10% { text-shadow: none; }
  20% { text-shadow: 0 0 15px #f0f, 0 0 30px #f0f; }
  30% { text-shadow: none; }
  40% { text-shadow: 0 0 25px #ff0, 0 0 50px #ff0; }
  60% { text-shadow: none; }
  80% { text-shadow: 0 0 15px #0ff, 0 0 35px #0ff; }
`},...{jelly:e`
  0%, 100% { transform: scale(1, 1); }
  25% { transform: scale(0.9, 1.1); }
  50% { transform: scale(1.1, 0.9); }
  75% { transform: scale(0.95, 1.05); }
`,jellyX:e`
  0% { transform: scaleX(1); }
  20% { transform: scaleX(0.9); }
  50% { transform: scaleX(1.25); }
  85% { transform: scaleX(0.8); }
  100% { transform: scaleX(1); }
`,jellyY:e`
  0% { transform: scaleY(1); }
  20% { transform: scaleY(0.9); }
  50% { transform: scaleY(1.25); }
  85% { transform: scaleY(0.8); }
  100% { transform: scaleY(1); }
`,jellyIn:e`
  0% { transform: scale(0.5); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
`,jellyOut:e`
  0% { transform: scale(1); opacity: 1; }
  20% { transform: scale(1.1); }
  50% { transform: scale(0.5); opacity: 0.5; }
  100% { transform: scale(0); opacity: 0; }
`},...{shadow:e`
  0%, 100% { box-shadow: none; }
  50% { box-shadow: 0 10px 20px rgba(0,0,0,0.2); }
`,shadowText:e`
  0%   { text-shadow: 1px 1px 0px #333; }
  50%  { text-shadow: 3px 3px 2px #333; }
  100% { text-shadow: 9px 10px 6px #999; }
`,shadowPulse:e`
  0%, 100% { box-shadow: 0 0 5px rgba(0,0,0,0.2); }
  50% { box-shadow: 0 0 25px rgba(0,0,0,0.4); }
`,shadowNeon:e`
  0%, 100% { text-shadow: 0 0 5px #0ff, 0 0 10px #0ff; }
  50% { text-shadow: 0 0 20px #0ff, 0 0 40px #0ff; }
`,spin:e`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`,spin3D:e`
  from { transform: rotateY(0deg); }
  to   { transform: rotateY(-360deg); }
`,spinX:e`
  from { transform: rotateX(0deg); }
  to { transform: rotateX(360deg); }
`,spinBounce:e`
  0% { transform: rotateZ(0deg) scale(1); }
  50% { transform: rotateZ(180deg) scale(1.2); }
  100% { transform: rotateZ(360deg) scale(1); }
`,swing:e`
  20% { transform: rotate(15deg); }
  40% { transform: rotate(-10deg); }
  60% { transform: rotate(5deg); }
  80% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
`,swingPivot:e`
  0%   { transform: rotateZ(0deg); transform-origin: center top; }
  20%  { transform: rotateZ(15deg); transform-origin: center top; }
  40%  { transform: rotateZ(-15deg); transform-origin: center top; }
  60%  { transform: rotateZ(7deg); transform-origin: center top; }
  80%  { transform: rotateZ(-7deg); transform-origin: center top; }
  100% { transform: rotateZ(0deg); transform-origin: center top; }
`,swingX:e`
  15% { transform: translateX(-25%) rotate(-5deg); }
  30% { transform: translateX(20%) rotate(3deg); }
  45% { transform: translateX(-15%) rotate(-3deg); }
  60% { transform: translateX(10%) rotate(2deg); }
  75% { transform: translateX(-5%) rotate(-1deg); }
  100% { transform: translateX(0); }
`,swingY:e`
  15% { transform: translateY(-25%) rotate(-3deg); }
  30% { transform: translateY(20%) rotate(2deg); }
  45% { transform: translateY(-15%) rotate(-2deg); }
  60% { transform: translateY(10%) rotate(1deg); }
  75% { transform: translateY(-5%) rotate(-1deg); }
  100% { transform: translateY(0); }
`,orbit:e`
  from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
`,orbitEllipse:e`
  from { transform: rotate(0deg) translateX(30px) translateY(10px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(30px) translateY(10px) rotate(-360deg); }
`},...{pulse:e`
  from { transform: scale(1); }
  to { transform: scale(1.1); }
`,pulseInOut:e`
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
`,pulseFade:e`
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.2); opacity: 0.6; }
`,pulseFast:e`
  0%, 100% { transform: scale(1); }
  25% { transform: scale(1.2); }
  75% { transform: scale(0.9); }
`,pulseColor:e`
  0%, 100% { transform: scale(1); background-color: #ff69b4; }
  50% { transform: scale(1.2); background-color: #ff1493; }
`},...Ot,...{squeezeMix:e`
  0% { transform: scale3d(1, 1, 1); }
  15% { transform: scale3d(0.95, 0.95, 1); }
  30% { transform: scale3d(0.9, 0.9, 1); }
  55% { transform: scale3d(0.75, 0.75, 1); }
  70% { transform: scale3d(1.3, 1.3, 1); }
  85% { transform: scale3d(0.95, 0.95, 1); }
  100% { transform: scale3d(1, 1, 1); }
`,squeezeHorizontal:e`
  0% { transform: scaleX(1); }
  15% { transform: scaleX(0.95); }
  30% { transform: scaleX(0.9); }
  55% { transform: scaleX(0.75); }
  70% { transform: scaleX(1.3); }
  85% { transform: scaleX(0.95); }
  100% { transform: scaleX(1); }
`,squeezeVertical:e`
  0% { transform: scaleY(1); }
  15% { transform: scaleY(0.95); }
  30% { transform: scaleY(0.9); }
  55% { transform: scaleY(0.75); }
  70% { transform: scaleY(1.3); }
  85% { transform: scaleY(0.95); }
  100% { transform: scaleY(1); }
`,squeezeDiagonal:e`
  0% { transform: scale3d(1,1,1); }
  25% { transform: scale3d(0.8,1.2,1); }
  50% { transform: scale3d(1.1,0.9,1); }
  75% { transform: scale3d(0.9,1.1,1); }
  100% { transform: scale3d(1,1,1); }
`,squeezePulse:e`
  0%,100% { transform: scale3d(1,1,1); }
  25% { transform: scale3d(0.9,0.9,1); }
  50% { transform: scale3d(1.1,1.1,1); }
  75% { transform: scale3d(0.95,0.95,1); }
`,squeezeBounce:e`
  0% { transform: scale3d(1,1,1); }
  20% { transform: scale3d(0.7,0.7,1); }
  50% { transform: scale3d(1.2,1.2,1); }
  70% { transform: scale3d(0.9,0.9,1); }
  100% { transform: scale3d(1,1,1); }
`,squeezeElastic:e`
  0% { transform: scale3d(1,1,1); }
  25% { transform: scale3d(0.8,1.2,1); }
  50% { transform: scale3d(1.2,0.8,1); }
  75% { transform: scale3d(0.9,1.1,1); }
  100% { transform: scale3d(1,1,1); }
`,squeezeFlash:e`
  0%,100% { transform: scale3d(1,1,1); opacity: 1; }
  25% { transform: scale3d(0.8,0.8,1); opacity: 0.6; }
  50% { transform: scale3d(1.2,1.2,1); opacity: 1; }
  75% { transform: scale3d(0.9,0.9,1); opacity: 0.8; }
`,shakeMix:e`
  0% { transform: translate3d(2px, 1px, 0) rotate(0deg); }
  10% { transform: translate3d(-1px, -2px, 0) rotate(-1deg); }
  20% { transform: translate3d(-3px, 0px, 0) rotate(1deg); }
  30% { transform: translate3d(0px, 2px, 0) rotate(0deg); }
  40% { transform: translate3d(1px, -1px, 0) rotate(1deg); }
  50% { transform: translate3d(-1px, 2px, 0) rotate(-1deg); }
  60% { transform: translate3d(-3px, 1px, 0) rotate(0deg); }
  70% { transform: translate3d(2px, 1px, 0) rotate(-1deg); }
  80% { transform: translate3d(-1px, -1px, 0) rotate(1deg); }
  90% { transform: translate3d(2px, 2px, 0) rotate(0deg); }
  100% { transform: translate3d(1px, -2px, 0) rotate(-1deg); }
`,shakeHorizontal:e`
  0%, 100% { transform: translateX(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateX(6px); }
  20%, 40%, 60%, 80% { transform: translateX(-4px); }
`,shakeVertical:e`
  0%, 100% { transform: translateY(0); }
  10%, 30%, 50%, 70%, 90% { transform: translateY(6px); }
  20%, 40%, 60%, 80% { transform: translateY(-4px); }
`,shakeDiagonal:e`
  0%,100% { transform: translate3d(0,0,0); }
  20% { transform: translate3d(5px,5px,0); }
  40% { transform: translate3d(-5px,-5px,0); }
  60% { transform: translate3d(5px,-5px,0); }
  80% { transform: translate3d(-5px,5px,0); }
`,shakeQuick:e`
  0%,100% { transform: translate3d(0,0,0); }
  10%,30%,50%,70%,90% { transform: translate3d(3px,0,0); }
  20%,40%,60%,80% { transform: translate3d(-3px,0,0); }
`,shakeRotate:e`
  0%,100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
  75% { transform: rotate(-3deg); }
`,shakeSkew:e`
  0%,100% { transform: skew(0deg, 0deg); }
  20% { transform: skew(-10deg, -5deg); }
  40% { transform: skew(8deg, 3deg); }
  60% { transform: skew(-6deg, -3deg); }
  80% { transform: skew(4deg, 2deg); }
`,shakeBounce:e`
  0%,100% { transform: translateY(0); }
  20% { transform: translateY(-6px); }
  40% { transform: translateY(4px); }
  60% { transform: translateY(-4px); }
  80% { transform: translateY(2px); }
`,shakeCrazy:e`
  0% { transform: translate(0,0) rotate(0deg); }
  20% { transform: translate(-4px,3px) rotate(-3deg); }
  40% { transform: translate(5px,-2px) rotate(4deg); }
  60% { transform: translate(-3px,2px) rotate(-4deg); }
  80% { transform: translate(3px,-3px) rotate(2deg); }
  100% { transform: translate(0,0) rotate(0deg); }
`,squeezeThenShakeX:e`
  0% { transform: scale3d(1,1,1); }
  20% { transform: scale3d(0.7,0.7,1); }
  40% { transform: scale3d(1.2,1.2,1); }
  60% { transform: scale3d(0.9,0.9,1); }
  70% { transform: translateX(0); }
  80% { transform: translateX(-6px); }
  90% { transform: translateX(6px); }
  100% { transform: translateX(0); }
`,shakeYThenSqueeze:e`
  0% { transform: translateY(0); }
  20% { transform: translateY(-6px); }
  40% { transform: translateY(6px); }
  60% { transform: translateY(-3px); }
  70% { transform: scale3d(0.7,0.7,1); }
  85% { transform: scale3d(1.2,1.2,1); }
  100% { transform: scale3d(1,1,1); }
`,squeezeShakeCrazy:e`
  0% { transform: scale3d(1,1,1); }
  20% { transform: scale3d(0.8,1.2,1); }
  40% { transform: scale3d(1.2,0.8,1); }
  50% { transform: translate(-4px,3px) rotate(-3deg); }
  70% { transform: translate(5px,-2px) rotate(4deg); }
  90% { transform: translate(-3px,2px) rotate(-4deg); }
  100% { transform: scale3d(1,1,1) translate(0,0) rotate(0); }
`},...{slideInFromLeft:e`
  from { transform: translateX(-100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`,slideInFromRight:e`
  from { transform: translateX(100%); opacity: 0; }
  to   { transform: translateX(0); opacity: 1; }
`,slideOutToLeft:e`
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(-100%); opacity: 0; }
`,slideOutToRight:e`
  from { transform: translateX(0); opacity: 1; }
  to   { transform: translateX(100%); opacity: 0; }
`,slideInFromTop:e`
  from { transform: translateY(-100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`,slideInFromBottom:e`
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
`,slideOutToTop:e`
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(-100%); opacity: 0; }
`,slideOutToBottom:e`
  from { transform: translateY(0); opacity: 1; }
  to   { transform: translateY(100%); opacity: 0; }
`,slideInFromLeftOvershoot:e`
  0%   { transform: translateX(-100%); opacity: 0; }
  60%  { transform: translateX(20%);  opacity: 1; }
  100% { transform: translateX(0);    opacity: 1; }
`,slideInFromRightOvershoot:e`
  0%   { transform: translateX(100%); opacity: 0; }
  60%  { transform: translateX(-20%); opacity: 1; }
  100% { transform: translateX(0);    opacity: 1; }
`,slideOutToLeftOvershoot:e`
  0%   { transform: translateX(0);     opacity: 1; }
  60%  { transform: translateX(-120%); opacity: 0; }
  100% { transform: translateX(-100%); opacity: 0; }
`,slideOutToRightOvershoot:e`
  0%   { transform: translateX(0);    opacity: 1; }
  60%  { transform: translateX(120%); opacity: 0; }
  100% { transform: translateX(100%); opacity: 0; }
`,slideInFromTopOvershoot:e`
  0%   { transform: translateY(-100%); opacity: 0; }
  60%  { transform: translateY(20%);   opacity: 1; }
  100% { transform: translateY(0);     opacity: 1; }
`,slideInFromBottomOvershoot:e`
  0%   { transform: translateY(100%); opacity: 0; }
  60%  { transform: translateY(-20%); opacity: 1; }
  100% { transform: translateY(0);    opacity: 1; }
`,slideOutToTopOvershoot:e`
  0%   { transform: translateY(0);      opacity: 1; }
  60%  { transform: translateY(-120%); opacity: 0; }
  100% { transform: translateY(-100%); opacity: 0; }
`,slideOutToBottomOvershoot:e`
  0%   { transform: translateY(0);     opacity: 1; }
  60%  { transform: translateY(120%); opacity: 0; }
  100% { transform: translateY(100%); opacity: 0; }
`},...{flip:Dt,flipIn:e`
  0%   { transform: rotateX(180deg); opacity: 0; }
  35%  { transform: rotateX(120deg); opacity: 0; }
  65%  { opacity: 0; }
  100% { transform: rotateX(360deg); opacity: 1; }
`,flipOut:e`
  0%   { transform: rotateX(0deg); opacity: 1; }
  35%  { transform: rotateX(-40deg); opacity: 1; }
  65%  { opacity: 0; }
  100% { transform: rotateX(180deg); opacity: 0; }
`,flipSlowDown:e`
  0%   { transform: rotateX(0deg); }
  5%   { transform: rotateX(1turn); }
  10%  { transform: rotateX(2turn); }
  20%  { transform: rotateX(3turn); }
  40%  { transform: rotateX(4turn); }
  70%,100% { transform: rotateX(5turn); }
`,flipToLeft:Pt,flipToRight:qt,flipFromTop:e`
  from { transform: rotateX(-90deg); }
  to { transform: rotateX(0); }
`,flipToTop:e`
  from { transform: rotateX(0); }
  to { transform: rotateX(-90deg); }
`,flipToBottom:e`
  from { transform: rotateX(0); }
  to { transform: rotateX(90deg); }
`,flipFromBottom:e`
  from { transform: rotateX(90deg); }
  to { transform: rotateX(0); }
`,flipFromLeftToCenter:Ct,flipFromRightToCenter:jt,flipRich:e`
  0%   { transform: perspective(1000px) rotateX(360deg); transform-origin: center; }
  100% { transform: perspective(1000px) rotateX(0deg); transform-origin: center; }
`,flipToTopRich:e`
  from { transform: rotateX(-90deg); transform-origin: center top; opacity: 1; }
  to   { transform: rotateX(90deg);  transform-origin: center top; opacity: 0; }
`,flipToBottomRich:e`
  from { opacity: 1; transform-origin: 0% 0%; transform: rotateX(0deg) translateY(0); }
  to   { opacity: 0; transform-origin: 0% 0%; transform: rotateX(-90deg) translateY(50px); }
`,flipToTopLeftRich:e`
  from {
    opacity: 1;
    transform-origin: top left;
    transform: rotateX(0deg) rotateY(0deg);
  }
  to {
    opacity: 0;
    transform-origin: top left;
    transform: rotateX(-90deg) rotateY(-90deg);
  }
`,flipToRightRich:e`
  from {
    opacity: 1;
    transform-origin: center right;
    transform: rotateY(0deg);
  }
  to {
    opacity: 0;
    transform-origin: center right;
    transform: rotateY(90deg);
  }
`,flipFromTopRich:e`
  from { opacity: 0; transform-origin: 0% 0%; transform: rotateX(90deg); }
  to   { opacity: 1; transform-origin: 0% 0%; transform: rotateX(0deg); }
`,flipFromBottomRich:e`
  from { transform: rotateX(-90deg); transform-origin: 50% 0; opacity: 0; }
  to   { transform: rotateX(0deg);  transform-origin: 50% 0; opacity: 1; }
`,flipFromLeftToCenterRich:e`
  0%   { transform: rotateY(-95deg) translateX(-200px); transform-origin: left; }
  100% { transform: rotateY(0deg); transform-origin: left; }
`,flipFromRightToCenterRich:e`
  0%   { transform: rotateY(95deg) translateX(200px); transform-origin: right; }
  100% { transform: rotateY(0deg); transform-origin: right; }
`},...{fold:e`from { transform: scaleY(1); } to { transform: scaleY(0); }`,unfold:e`from { transform: scaleY(0); } to { transform: scaleY(1); }`,foldDeep:e`
  0% { transform: scale3d(1, 1, 1); }
  30% { transform: scale3d(1, 0.4, 1); }
  60% { transform: scale3d(0.4, 0.4, 1); }
  100% { opacity: 0; transform: scale3d(0.2, 0.2, 0.2); }
`,unfoldDeep:e`
  0% { opacity: 0; transform: scale3d(0, 0, 0); }
  30% { opacity: 1; transform: scale3d(0.4, 0.4, 1); }
  60% { transform: scale3d(0.4, 1, 1); }
  100% { transform: scale3d(1, 1, 1); }
`,foldLeft:e`
  from { transform: perspective(400px) rotateY(0); opacity: 1; }
  to { transform: perspective(400px) rotateY(-90deg); opacity: 0; }
`,unfoldLeft:e`
  from { transform: perspective(400px) rotateY(-90deg); opacity: 0; }
  to { transform: perspective(400px) rotateY(0); opacity: 1; }
`,foldRight:e`
  from { transform: perspective(400px) rotateY(0); opacity: 1; }
  to { transform: perspective(400px) rotateY(90deg); opacity: 0; }
`,unfoldRight:e`
  from { transform: perspective(400px) rotateY(90deg); opacity: 0; }
  to { transform: perspective(400px) rotateY(0); opacity: 1; }
`,foldUp:e`
  from { transform: perspective(400px) rotateX(0); opacity: 1; }
  to { transform: perspective(400px) rotateX(-90deg); opacity: 0; }
`,unfoldUp:e`
  from { transform: perspective(400px) rotateX(-90deg); opacity: 0; }
  to { transform: perspective(400px) rotateX(0); opacity: 1; }
`,foldDown:e`
  from { transform: perspective(400px) rotateX(0); opacity: 1; }
  to { transform: perspective(400px) rotateX(90deg); opacity: 0; }
`,unfoldDown:e`
  from { transform: perspective(400px) rotateX(90deg); opacity: 0; }
  to { transform: perspective(400px) rotateX(0); opacity: 1; }
`},...{hangOnLeft:e`
  from { transform: rotate(0deg); }
  to { transform: rotate(-20deg); }
`,hangOnRight:e`
  from { transform: rotate(0deg); }
  to { transform: rotate(20deg); }
`,hangOnTop:e`
  from { transform: rotate(0deg); }
  to { transform: rotate(20deg); transform-origin: top; }
`,hangOnBottom:e`
  from { transform: rotate(0deg); }
  to { transform: rotate(-20deg); transform-origin: bottom; }
`,hangOnLeftSwing:e`
  0% { transform-origin: left; transform: rotate(0deg); }
  30% { transform: rotate(110deg); }
  50% { transform: rotate(75deg); }
  65% { transform: rotate(100deg); }
  78% { transform: rotate(80deg); }
  88% { transform: rotate(95deg); }
  95% { transform: rotate(86deg); }
  100% { transform: rotate(90deg); }
`,hangOnRightSwing:e`
  0% { transform-origin: right; transform: rotate(0deg); }
  30% { transform: rotate(-110deg); }
  50% { transform: rotate(-75deg); }
  65% { transform: rotate(-100deg); }
  78% { transform: rotate(-80deg); }
  88% { transform: rotate(-95deg); }
  95% { transform: rotate(-86deg); }
  100% { transform: rotate(-90deg); }
`,hangOnTopSwing:e`
  0% { transform-origin: top; transform: rotate(0deg); }
  30% { transform: rotate(-110deg); }
  50% { transform: rotate(-75deg); }
  65% { transform: rotate(-100deg); }
  78% { transform: rotate(-80deg); }
  88% { transform: rotate(-95deg); }
  95% { transform: rotate(-86deg); }
  100% { transform: rotate(-90deg); }
`,hangOnBottomSwing:e`
  0% { transform-origin: bottom; transform: rotate(0deg); }
  30% { transform: rotate(110deg); }
  50% { transform: rotate(75deg); }
  65% { transform: rotate(100deg); }
  78% { transform: rotate(80deg); }
  88% { transform: rotate(95deg); }
  95% { transform: rotate(86deg); }
  100% { transform: rotate(90deg); }
`,hangOnOscillate:e`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(15deg); }
  50% { transform: rotate(-15deg); }
  75% { transform: rotate(10deg); }
  100% { transform: rotate(0deg); }
`,hangOnDrop:e`
  0% { transform-origin: top; transform: rotate(0deg); opacity: 1; }
  20% { transform: rotate(30deg); opacity: 1; }
  40% { transform: rotate(-30deg); opacity: 1; }
  60% { transform: rotate(15deg); opacity: 1; }
  80% { transform: rotate(-15deg); opacity: 1; }
  100% { transform: rotate(90deg) translateY(200%); opacity: 0; }
`},...{zoomIn:e`
  from { transform: scale(2); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`,zoomOut:e`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(2); opacity: 0; }
`,zoomInFromLeft:e`
  from { transform: scale(2) translateX(-100%); opacity: 0; }
  to { transform: scale(1) translateX(0); opacity: 1; }
`,zoomInFromRight:e`
  from { transform: scale(2) translateX(100%); opacity: 0; }
  to { transform: scale(1) translateX(0); opacity: 1; }
`,zoomInFromTop:e`
  from { transform: scale(2) translateY(-100%); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
`,zoomInFromBottom:e`
  from { transform: scale(2) translateY(100%); opacity: 0; }
  to { transform: scale(1) translateY(0); opacity: 1; }
`,zoomOutToLeft:e`
  from { transform: scale(1) translateX(0); opacity: 1; }
  to { transform: scale(2) translateX(-100%); opacity: 0; }
`,zoomOutToRight:e`
  from { transform: scale(1) translateX(0); opacity: 1; }
  to { transform: scale(2) translateX(100%); opacity: 0; }
`,zoomOutToTop:e`
  from { transform: scale(1) translateY(0); opacity: 1; }
  to { transform: scale(2) translateY(-100%); opacity: 0; }
`,zoomOutToBottom:e`
  from { transform: scale(1) translateY(0); opacity: 1; }
  to { transform: scale(2) translateY(100%); opacity: 0; }
`,zoomInRotate:e`
  from { transform: scale(0) rotate(-180deg); opacity: 0; }
  to { transform: scale(1) rotate(0deg); opacity: 1; }
`,zoomOutRotate:e`
  from { transform: scale(1) rotate(0deg); opacity: 1; }
  to { transform: scale(0) rotate(180deg); opacity: 0; }
`,zoomInFlipX:e`
  from { transform: perspective(400px) scale(0.5) rotateX(90deg); opacity: 0; }
  to { transform: perspective(400px) scale(1) rotateX(0deg); opacity: 1; }
`,zoomOutFlipX:e`
  from { transform: perspective(400px) scale(1) rotateX(0deg); opacity: 1; }
  to { transform: perspective(400px) scale(0.5) rotateX(90deg); opacity: 0; }
`,zoomInFlipY:e`
  from { transform: perspective(400px) scale(0.5) rotateY(90deg); opacity: 0; }
  to { transform: perspective(400px) scale(1) rotateY(0deg); opacity: 1; }
`,zoomOutFlipY:e`
  from { transform: perspective(400px) scale(1) rotateY(0deg); opacity: 1; }
  to { transform: perspective(400px) scale(0.5) rotateY(90deg); opacity: 0; }
`,zoomPulse:e`
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
`,zoomSwing:e`
  0% { transform: scale(0.3); opacity: 0; }
  50% { transform: scale(1.2); opacity: 1; }
  70% { transform: scale(0.9); }
  100% { transform: scale(1); }
`},...{rotateCW:e`
  from {
    transform: rotateZ(0deg);
    transform-origin: center center;
  }
  to {
    transform: rotateZ(360deg);
    transform-origin: center center;
  }
`,rotateACW:e`
  from {
    transform: rotateZ(0deg);
    transform-origin: center center;
  }
  to {
    transform: rotateZ(-360deg);
    transform-origin: center center;
  }
`,rotateSlowDown:e`
  0% { transform: rotateZ(0deg); transform-origin: center center; }
  5% { transform: rotateZ(1turn); transform-origin: center center; }
  10% { transform: rotateZ(2turn); transform-origin: center center; }
  20% { transform: rotateZ(3turn); transform-origin: center center; }
  40% { transform: rotateZ(4turn); transform-origin: center center; }
  65%, 100% { transform: rotateZ(5turn); transform-origin: center center; }
`,rotateX:e`
  from { transform: rotateX(0deg); transform-origin: center center; }
  to { transform: rotateX(360deg); transform-origin: center center; }
`,rotateY:e`
  from { transform: rotateY(0deg); transform-origin: center center; }
  to { transform: rotateY(360deg); transform-origin: center center; }
`,rotateFromLeft:e`
  from { transform: rotateY(-90deg); transform-origin: left center; }
  to { transform: rotateY(0deg); transform-origin: left center; }
`,rotateFromRight:e`
  from { transform: rotateY(90deg); transform-origin: right center; }
  to { transform: rotateY(0deg); transform-origin: right center; }
`,rotateToLeft:e`
  from { transform: rotateY(0deg); transform-origin: center center; }
  to { transform: rotateY(-90deg); transform-origin: center center; }
`,rotateToRight:e`
  from { transform: rotateY(0deg); transform-origin: center center; }
  to { transform: rotateY(90deg); transform-origin: center center; }
`,rotateFromTop:e`
  from { transform: rotateX(-90deg); transform-origin: center top; }
  to { transform: rotateX(0deg); transform-origin: center top; }
`,rotateFromBottom:e`
  from { transform: rotateX(90deg); transform-origin: center bottom; }
  to { transform: rotateX(0deg); transform-origin: center bottom; }
`,rotateToTop:e`
  from { transform: rotateX(0deg); transform-origin: center top; }
  to { transform: rotateX(-90deg); transform-origin: center top; }
`,rotateToBottom:e`
  from { transform: rotateX(0deg); transform-origin: center bottom; }
  to { transform: rotateX(90deg); transform-origin: center bottom; }
`},...{heartBeat:e`
  0%, 28%, 70%, 100% { transform: scale(1); }
  14%, 42% { transform: scale(1.3); }
`,tada:e`
  from { transform: scale3d(1, 1, 1); }
  10%, 20% { transform: scale3d(.9, .9, .9) rotate(-3deg); }
  30%, 50%, 70%, 90% { transform: scale3d(1.1, 1.1, 1.1) rotate(3deg); }
  40%, 60%, 80% { transform: scale3d(1.1, 1.1, 1.1) rotate(-3deg); }
  to { transform: scale3d(1, 1, 1); }
`,hinge:e`
  0% { transform: rotate(0); transform-origin: top left; animation-timing-function: ease-in-out; }
  20%, 60% { transform: rotate(80deg); transform-origin: top left; animation-timing-function: ease-in-out; }
  40%, 80% { transform: rotate(60deg); transform-origin: top left; animation-timing-function: ease-in-out; }
  100% { transform: translateY(700px); opacity: 0; }
`,lightSpeedInLeft:e`
  from { transform: translateX(-100%) skewX(30deg); opacity: 0; }
  60% { transform: skewX(-20deg); opacity: 1; }
  80% { transform: skewX(5deg); }
  to { transform: none; }
`,lightSpeedOutRight:e`
  from { opacity: 1; }
  to { transform: translateX(100%) skewX(-30deg); opacity: 0; }
`},...{popIn:e`
  from { opacity: 0; transform: scale3d(0.5,0.5,0.5); }
  to { opacity: 1; transform: scale3d(1,1,1); }
`,popOut:e`
  from { opacity: 1; transform: scale3d(1,1,1); }
  to { opacity: 0; transform: scale3d(0.5,0.5,0.5); }
`,popBounceIn:e`
  0% { opacity: 0; transform: scale3d(0.3,0.3,0.3); }
  50% { opacity: 1; transform: scale3d(1.05,1.05,1.05); }
  70% { transform: scale3d(0.9,0.9,0.9); }
  100% { transform: scale3d(1,1,1); }
`,popBounceOut:e`
  20% { transform: scale3d(0.9,0.9,0.9); }
  50%,55% { opacity:1; transform: scale3d(1.1,1.1,1.1); }
  to { opacity:0; transform: scale3d(0.3,0.3,0.3); }
`,popUpIn:e`
  from { opacity:0; transform: translateY(50%) scale3d(0.5,0.5,0.5); }
  to { opacity:1; transform: translateY(0) scale3d(1,1,1); }
`,popUpOut:e`
  from { opacity:1; transform: translateY(0) scale3d(1,1,1); }
  to { opacity:0; transform: translateY(-50%) scale3d(0.5,0.5,0.5); }
`,popRotateIn:e`
  from { opacity:0; transform: scale3d(0.5,0.5,0.5) rotate(-45deg); }
  to { opacity:1; transform: scale3d(1,1,1) rotate(0deg); }
`,popRotateOut:e`
  from { opacity:1; transform: scale3d(1,1,1) rotate(0deg); }
  to { opacity:0; transform: scale3d(0.5,0.5,0.5) rotate(45deg); }
`,popBlurIn:e`
  from { opacity:0; transform: scale3d(0.5,0.5,0.5); filter: blur(5px); }
  to { opacity:1; transform: scale3d(1,1,1); filter: blur(0); }
`,popBlurOut:e`
  from { opacity:1; transform: scale3d(1,1,1); filter: blur(0); }
  to { opacity:0; transform: scale3d(0.5,0.5,0.5); filter: blur(5px); }
`,popLeftIn:e`
  from { opacity: 0; transform: translateX(-50%) scale3d(0.5,0.5,0.5); }
  to { opacity: 1; transform: translateX(0) scale3d(1,1,1); }
`,popLeftOut:e`
  from { opacity:1; transform: translateX(0) scale3d(1,1,1); }
  to { opacity:0; transform: translateX(-50%) scale3d(0.5,0.5,0.5); }
`,popRightIn:e`
  from { opacity: 0; transform: translateX(50%) scale3d(0.5,0.5,0.5); }
  to { opacity: 1; transform: translateX(0) scale3d(1,1,1); }
`,popRightOut:e`
  from { opacity:1; transform: translateX(0) scale3d(1,1,1); }
  to { opacity:0; transform: translateX(50%) scale3d(0.5,0.5,0.5); }
`},...x},Gt=Object.keys($t),Nt=Object.fromEntries([{name:"🎾 Bounce",key:"bounce",prefix:"bounce"},{name:"✨ Text / Glow Effects",key:"text",prefix:"effect"},{name:"🌫 Blur",key:"blur",prefix:"blur"},{name:"⚡ Flash",key:"flash",prefix:"flash"},{name:"🎈 Float",key:"float",prefix:"float"},{name:"💡 Glow",key:"glow",prefix:"glow"},{name:"🍮 Jelly",key:"jelly",prefix:"jelly"},{name:"🌑 Shadow / Spin / Swing / Orbit",key:"shadow",prefix:"shadow"},{name:"💓 Pulse",key:"pulse",prefix:"pulse"},{name:"🌫 Fade",key:"fade",prefix:"fade"},{name:"🤯 Squeeze / Shake",key:"shake",prefix:"shake"},{name:"📥 Slide",key:"slide",prefix:"slide"},{name:"🔄 Flip",key:"flip",prefix:"flip"},{name:"📂 Fold / Unfold",key:"fold",prefix:"fold"},{name:"🪝 Hang On",key:"hangOn",prefix:"hangOn"},{name:"🔍 Zoom",key:"zoom",prefix:"zoom"},{name:"🌀 Rotate",key:"rotate",prefix:"rotate"},{name:"🎉 Fun / Attention",key:"fun",prefix:""}].map(({key:t,prefix:r})=>[t,Object.keys($t).filter(t=>!r||t.startsWith(r))])),Ut={linear:"linear",ease:"ease",easeIn:"ease-in","ease-in":"ease-in",easeOut:"ease-out","ease-out":"ease-out",easeInOut:"ease-in-out","ease-in-out":"ease-in-out"},Wt=["type","duration","timing","delay","iteration","direction","fillMode","tagName"],Mt=o("div").withConfig({shouldForwardProp:t=>!Wt.includes(t)})`
  margin: 0;
  padding: 0;

  ${({type:t,duration:r,timing:a,delay:o,iteration:e,direction:n,fillMode:f})=>s`
    animation: ${t&&$t[t]} ${"number"==typeof r?`${r}ms`:r}
      ${a?Ut[a]:""} ${"number"==typeof o?`${o}ms`:o} ${e??""}
      ${n??""} ${f??""};
  `}
`,Et=({tagName:r="div",children:a,className:o,type:e="blurIn",duration:s,timing:n="ease",delay:f="0s",direction:m="alternate",fillMode:l="forwards",...p})=>{const c=s??i[e]??"1s";return t(Mt,{as:r,className:o,type:e,duration:"number"==typeof c?`${c}ms`:c,timing:n,delay:f,iteration:"infinite",direction:m,fillMode:l,...p,children:a})},At=e`
  50% { border-color: transparent; }
`,Ht=o.span`
  margin-left: 2px;
  border-left: 3px solid ${({cursorColor:t})=>t||"#000"};
  animation: ${At} 0.7s steps(1) infinite;
`,Vt=({heading:o="",dataText:e=[],className:s,cursorColor:i="#000",children:p})=>{const[c,d]=n(""),[g,y]=n(!1),[x,u]=n(0),[h,Y]=n(150),X=f(()=>Array.isArray(e)?e:"string"==typeof e?[e]:Array.isArray(p)?p:"string"==typeof p?[p]:[],[p,e]),b=m(null);return l(()=>{if(0===X.length)return;return b.current=window.setTimeout(()=>{const t=x%X.length,r=X[t];d(t=>g?r.substring(0,t.length-1):r.substring(0,t.length+1)),Y(g?30:150),g||c!==r?g&&""===c&&(y(!1),u(t=>t+1)):setTimeout(()=>y(!0),500)},h),()=>{b.current&&clearTimeout(b.current)}},[c,g,x,X,h]),r("div",{className:s,children:[o&&r(a,{children:[o," "]}),t("span",{children:c}),t(Ht,{cursorColor:i})]})},Jt={delay:"0s",direction:"normal",timing:"ease",iteration:1,fillMode:"forwards"},Qt=(t,r)=>({...Jt,type:t,duration:r??(i[t??"blurIn"]??"1s")}),Kt=({children:r,tagName:a="div",type:o,duration:e,className:s,...n})=>t(Et,{...Qt(o,e),tagName:a,className:s,...n,children:r});export{Vt as AnimateTyping,Kt as WrapperAnimate,Nt as animGroups,Gt as animNames,Et as default,i as defaultDuration};
