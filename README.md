<div align="center">
    <h1>react-animate-z</h1>
    <a href="https://www.npmjs.com/package/react-animate-z">react-animate-z</a>
    <br />
    <br />
    <b><a href="https://codesandbox.io/u/delpi.k">LIVE EXAMPLE</a></b>
</div>

---
React Component to show animated text and objects, built with [styled-components](https://www.styled-components.com/).

The Component provides regular animation for common object and some animation effects especially for typography like letters and multi-line text.

## Installation

Install via npm:

```
npm i react-animate-z
```

 ## Usage

To use react-animate-z in your react project, wrap the content with a `Animate` component and customize the animation with relevant properties.

```js
import Animate from 'react-animate-z'

const DelpiAnimate = () => {
  return (
    <Animate
      type="blur"
      duration="1000ms"
      delay="0s"
      direction="normal"
      timing="ease"
      iteration="infinite"
      fillMode="none">
      Content...
    </Animate>
  )
}
```

### Available properties

|  Property   | Corresponding Animation Property |     Data Type     | Default  Value | Property Unit |
| :---------: | :------------------------------: | :---------------: | :------------: | :-----------: |
|   `type`    |         `animation-name`         |     `String`      |     "blur"     |       -       |
| `duration`  |       `animation-duration`       |     `String`      |      "1s"      |  `s` or `ms`  |
|   `delay`   |        `animation-delay`         |     `String`      |      "0s"      |  `s` or `ms`  |
| `direction` |      `animation-direction`       |     `String`      |  "alternate"   |       -       |
|  `timing`   |   `animation-timing-function`    |     `String`      |     "ease"     |       -       |
| `iteration` |   `animation-iteration-count`    | `Number` `String` |   "infinite"   |       -       |
| `fillMode`  |      `animation-fill-mode`       |     `String`      |     "none"     |       -       |

### Available animations

| `type` / Animation name |
| ----------------------- |
| `blur`                  |
| `fadeIn`                |
| `fadeOut`               |
| `hang`                  |
| `hangOnLeft`            |
| `hangOnRight`           |
| `swing`                 |
| `glowing`               |
| `shakeMix`              |
| `shakeHorizontal`       |
| `shakeVertical`         |
| `spin`                  |
| `bounce`                |
| `flipCenterToRight`     |
| `flipFromLeftToCenter`  |
| `flash`                 |
| `pulse`                 |
| `jelly`                 |
| `squeezeHorizontal`     |
| `squeezeVertical`       |
| `flipHorizontal`        |
| `flipVertical`          |


## Chain Animation

An string-arry of animation names is used to wrap the animations you want to chain.

```js
import Animate from 'react-animate-z'

const AnimationsForChaining = ["swing", "flipSlowDown", "fadeOutToBottom", "jelly"]

const AnimationChain = () => {

  const [ animationIndex, setAnimationIndex ] = useState(0)
  const [ animationType, setAnimationType ] = useState(AnimationsForChaining[0])

  const handleChainAnimation = () => {
    setCounter(animationIndex+1)
    setAnimationType(selectedItems[animationIndex+1])
  }

  return (
    <Animate
      onAnimationEnd={handleChainAnimation}
      type={animationType}
      duration="1000ms"
      timing="linear"
      iteration={1}>
      Animate
    </Animate>
  )
}
```

##### animation type - mapping name

```js
// Animation basic mode
"blur"
"bounce"
"effect3D"
"flash"
"float"
"glowing"
"jelly"
"pulse"
"shadow"
"spin"
"swing"
"fadeIn"
"fadeInFromLeft"
"fadeInFromRight"
"fadeInFromTop"
"fadeInFromBottom"
"fadeOut"
"fadeOutToLeft"
"fadeOutToRight"
"fadeOutToTop"
"fadeOutToBottom"
"flip"
"flipIn"
"flipOut"
"flipSlowDown"
"flipFromTop"
"flipToTop"
"flipFromBottom"
"flipToBottom"
"flipFromLeftToCenter"
"fold"
"unfold"
"hangOnLeft"
"hangOnRight"
"rotateSlowDown"
"rotateCW"
"rotateACW"
"shakeMix"
"shakeHorizontal"
"shakeVertical"
"squeezeMix"
"squeezeHorizontal"
"squeezeVertical"
"slideInFromLeft"
"slideInFromRight"
"slideOutToLeft"
"slideOutToRight"
"slideInFromTop"
"slideInFromBottom"
"slideOutToTop"
"slideOutToBottom"
"zoomIn"
"zoomOut"
"popIn"
"popOut"
```

##### animation type name: typewriter

```js
// Animation typing text - mode
// import { AnimateTyping } from 'react-animate-z';

<Animate
    type="typewriter"
    // props
    typingWrite={{
      dataText: ["Sushi", "Pizza", "Brötchen", "Salat"],
      // heading?: string;
      // className?: string;
      // dataText?: string[];
    }}
/>

// or
<AnimateTyping
    dataText ={["Sushi", "Pizza", "Brötchen", "Salat"]}
    // heading?: string;
    // className?: string;
    // dataText?: string[];
/>
```

### License

MIT
