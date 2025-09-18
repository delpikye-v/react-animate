# 📦 react-animate-z

<div align="center">
  <b>✨ Simple React animation components built with styled-components</b>.
  <br />
  <br />
  <a href="https://www.npmjs.com/package/react-animate-z">react-animate-z</a>
  <br />
  <br />
  <b><a href="https://codesandbox.io/p/devbox/lively-night-lrjs4s">LIVE EXAMPLE</a></b>
</div>

<br />

[![NPM](https://img.shields.io/npm/v/react-animate-z.svg)](https://www.npmjs.com/package/react-animate-z)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
![Downloads](https://img.shields.io/npm/dt/react-animate-z.svg)

A React + styled-components based animation library with more than
**180+ pre-built animations**.

## 🚀 Features

✅ Easy-to-use animation wrapper for any element

✅ Fully typed with TypeScript

✅ Customizable duration, delay, iteration, timing, direction, fillMode

✅ Typewriter-style text animation with blinking cursor

## 🚀 Installation

```bash
npm install react-animate-z

# or

yarn add react-animate-z
```

## 🎬 Usage

```tsx
import React from "react";
import Animate from "react-animate-z";

export default function App() {
  return (
    <Animate type="bounce" duration="1s">
      <h1>Hello Animation</h1>
    </Animate>
  );
}
```

## 🔧 Props

Prop Type Default Description

| Prop        | Type                   | Default      | Description                                                                              |
| ----------- | ---------------------- | ------------ | ---------------------------------------------------------------------------------------- |
| `type`      | `AnimateType`          | `'blurIn'`   | Animation name (ví dụ: `'blurIn'`, `'bounce'`, `'fadeOut'`, ...)                         |
| `duration`  | `string \| number`     | `'1s'`       | Duration of the animation (can be in seconds `'1s'` or milliseconds `1000`)              |
| `timing`    | `TimingKey`            | `'ease'`     | Timing function (e.g., `'ease'`, `'linear'`, `'ease-in'`, `'ease-out'`)                  |
| `delay`     | `string \| number`     | `'0s'`       | Delay before the animation starts                                                        |
| `iteration` | `number \| "infinite"` | `1`          | Repeat count of the animation                                                            |
| `direction` | `string`               | `'normal'`   | Animation direction (`'normal'`, `'alternate'`, `'reverse'`, etc.)                       |
| `fillMode`  | `string`               | `'forwards'` | How styles are applied after animation (`'forwards'`, `'backwards'`, `'both'`, `'none'`) |
| `tagName`   | `string`               | `'div'`      | Custom HTML tag to render                                                                |

---

## 🎨 Available Animations

### 🎾 Bounce

- bounce
- bounceIn
- bounceOut
- bounceElastic
- bounceSmall
- bounceRotate
- bounceJelly

### ✨ Text / Glow Effects

- effect3D
- neonGlow
- retro3D
- emboss
- fireGlow
- iceGlow
- shine

### 🌫 Blur

- blurIn
- blurInZoom
- blurInScale
- blurInUp
- blurInRotate
- blurOut
- blurOutZoom
- blurOutScale
- blurOutDown
- blurOutRotate

### ⚡ Flash

- flash
- flashIrregular
- flashFast
- flashSlow
- flashPulse

### 🎈 Float

- float
- floatSway
- floatHorizontal
- floatCircular
- floatWiggle

### 💡 Glow

- glow
- glowTextFlicker
- glowRainbow
- glowBreathing
- glowGlitch

### 🍮 Jelly

- jelly
- jellyX
- jellyY
- jellyIn
- jellyOut

### 🌑 Shadow / Spin / Swing / Orbit

- shadow
- shadowText
- shadowPulse
- shadowNeon
- spin
- spin3D
- spinX
- spinBounce
- swing
- swingPivot
- swingX
- swingY
- orbit
- orbitEllipse

### 💓 Pulse

- pulse
- pulseInOut
- pulseFade
- pulseFast
- pulseColor

### 🌫 Fade

- fadeIn
- fadeOut
- fadeInFromLeft
- fadeInFromRight
- fadeInFromTop
- fadeInFromBottom
- fadeOutToLeft
- fadeOutToRight
- fadeOutToTop
- fadeOutToBottom
- fadeInZoom
- fadeOutZoom
- fadeInRotate
- fadeOutRotate
- fadeInSkew
- fadeOutSkew
- fadeInFlipX
- fadeOutFlipX
- fadeInFlipY
- fadeOutFlipY
- fadeInPerspective
- fadeOutPerspective

### 🤯 Squeeze / Shake

- squeezeMix
- squeezeHorizontal
- squeezeVertical
- squeezeDiagonal
- squeezePulse
- shakeMix
- shakeHorizontal
- shakeVertical
- shakeDiagonal
- shakeQuick

### 📥 Slide

- slideInFromLeft
- slideInFromRight
- slideOutToLeft
- slideOutToRight
- slideInFromTop
- slideInFromBottom
- slideOutToTop
- slideOutToBottom
- slideInFromLeftOvershoot
- slideInFromRightOvershoot
- slideOutToLeftOvershoot
- slideOutToRightOvershoot
- slideInFromTopOvershoot
- slideInFromBottomOvershoot
- slideOutToTopOvershoot
- slideOutToBottomOvershoot

### 🔄 Flip

- flip
- flipIn
- flipOut
- flipSlowDown
- flipToLeft
- flipToRight
- flipFromTop
- flipToTop
- flipToBottom
- flipFromBottom
- flipFromLeftToCenter
- flipFromRightToCenter
- flipRich
- flipToTopRich
- flipToBottomRich
- flipToTopLeftRich
- flipToRightRich
- flipFromTopRich
- flipFromBottomRich
- flipFromLeftToCenterRich
- flipFromRightToCenterRich

### 📂 Fold / Unfold

- fold
- foldDeep
- unfold
- unfoldDeep

### 🪝 Hang On

- hangOnLeft
- hangOnRight
- hangOnTop
- hangOnBottom
- hangOnLeftSwing
- hangOnRightSwing
- hangOnTopSwing
- hangOnBottomSwing
- hangOnOscillate
- hangOnDrop

### 🔍 Zoom

- zoomIn
- zoomOut
- zoomInFromLeft
- zoomInFromRight
- zoomInFromTop
- zoomInFromBottom
- zoomOutToLeft
- zoomOutToRight
- zoomOutToTop
- zoomOutToBottom

### 🌀 Rotate

- rotateCW
- rotateACW
- rotateSlowDown
- rotateX
- rotateY
- rotateFromLeft
- rotateFromRight
- rotateToLeft
- rotateToRight
- rotateFromTop
- rotateFromBottom
- rotateToTop
- rotateToBottom

### 🎉 Fun / Attention

- heartBeat
- tada
- hinge
- lightSpeedInLeft
- lightSpeedOutRight
- popIn
- popOut
- popBounceIn
- popBounceOut
- popUpIn
- popUpOut
- popRotateIn
- popRotateOut
- popBlurIn
- popBlurOut
- popLeftIn
- popLeftOut
- popRightIn
- popRightOut
- rubberBand
- jello
- wobble
- rollIn
- jackInTheBox

---

#### Chain Animation

An string-arry of animation names is used to wrap the animations you want to chain.

```js
import React, { useState } from "react";
import { AnimateTyping } from "react-animate-z";

const AnimationsForChaining = [
  "swing",
  "flipSlowDown",
  "fadeOutToBottom",
  "jelly",
];

const AnimationChain: React.FC = () => {
  // const [animationIndex, setAnimationIndex] = useState(0);
  // const [animationType, setAnimationType] = useState(AnimationsForChaining[0]);

  // const handleChainAnimation = () => {
  //   const nextIndex = (animationIndex + 1) % AnimationsForChaining.length;
  //   setAnimationIndex(nextIndex);
  //   setAnimationType(AnimationsForChaining[nextIndex]);
  // };

  return (
    <>
      <AnimateTyping
        heading="Hello,"
        dataText={["I am Delpi", "I build animations", "I love coding!"]}
        cursorColor="red"
      />

      <AnimateTyping dataText="Only once" />

      <AnimateTyping
        heading="Fast typing:"
        dataText={["speed x2", "super fast!"]}
        typingSpeed={50}
        deletingSpeed={20}
        pauseTime={1000}
      />
    </>
  );
};

export default AnimationChain;
```

## 📜 License

MIT © Delpi
