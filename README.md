
# 🎞️ react-animate-z

[![NPM](https://img.shields.io/npm/v/react-animate-z.svg)](https://www.npmjs.com/package/react-animate-z) ![Downloads](https://img.shields.io/npm/dt/react-animate-z.svg)

<a href="https://codesandbox.io/p/devbox/lively-night-lrjs4s" target="_blank">LIVE EXAMPLE</a>


A lightweight, UX-first animation library for React.

**react-animate-z** provides a clean imperative + declarative API to orchestrate animations

---

## ✨ Why react-animate-z

- 🚀 180+ prebuilt animations
- 🧠 Semantic UX states (loading / success / error)
- ⛓️ Timeline API (sequence, parallel, wait)
- 🎯 Ref-based animation (no wrapper required)
- 🎲 Random & playful animation hooks
- ♿ Reduced-motion safe
- 🧩 Fully typed with TypeScript

---

## 📦 Installation

```bash
npm install react-animate-z
# or
yarn add react-animate-z
```

---

## 🚀 Basic Usage (Declarative)

```tsx
import Animate from "react-animate-z";

export default function App() {
  return (
    <Animate type="bounce" duration="1s">
      <h1>Hello Animation</h1>
    </Animate>
  );
}
```

## 🎛️ Animation Catalog
```ts
import { animNames, animGroups } from "react-animate-z";

console.log(animNames);   // all animation names
console.log(animGroups); // grouped by category

```

---

## 🔧 `Animate` Props

| Prop        | Type                   | Default     | Description         |
|-------------|------------------------|-------------|---------------------|
| `type`      | `AnimateType`          | `blurIn`    | Animation name      |
| `duration`  | `string \| number`     | preset map  | `'1s'` or `1000`    |
| `timing`    | `TimingKey`            | `ease`      | CSS timing function |
| `delay`     | `string \| number`     | `0s`        | Delay before start  |
| `iteration` | `number \| "infinite"` | `1`         | Repeat count        |
| `direction` | `string`               | `normal`    | Animation direction |
| `fillMode`  | `string`               | `forwards`  | CSS fill-mode       |
| `tagName`   | `string`               | `div`       | Rendered HTML tag   |

---

## 🎯 Ref-based Animation (Imperative)

```tsx
import { useAnimate } from "react-animate-z";

function Box() {
  const { ref, play } = useAnimate<HTMLDivElement>();

  return (
    <div ref={ref} onClick={() => play("pulse")}>
      Click me
    </div>
  );
}
```

---

## ⛓️ Timeline API

Compose animations as clear motion flows, not nested callbacks.

```tsx
import { useAnimate } from "react-animate-z";
import { useEffect } from "react";

function Example() {
  const { ref, sequence } = useAnimate<HTMLDivElement>();

  useEffect(() => {
    sequence()
      .animate("fadeInFromBottom")
      .wait(300)
      .animate("pulse");
  }, []);

  return <div ref={ref}>Hello</div>;
}
```

---

## 🧠 Semantic Recipes (State-driven UX)

```tsx
import { useRecipe } from "react-animate-z";

function SaveButton() {
  const anim = useRecipe();

  return (
    <button
      ref={anim.ref}
      onClick={async () => {
        anim.loading();
        await save();
        anim.success();
      }}
    >
      Save
    </button>
  );
}
```

Available presets:
- loading()
- success()
- error()
- idle()

---

## 🔁 <AnimateOn /> — Trigger by State Change

```ts
import { AnimateOn } from "react-animate-z";

<AnimateOn when={status} value="success" anim={["fadeIn", "pulse"]}>
  <div>Done!</div>
</AnimateOn>

```

---

## 🧩 AnimateGroup – Staggered Children

```tsx
import { AnimateGroup } from "react-animate-z";

<AnimateGroup type="fadeInUp" stagger={160}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</AnimateGroup>

```

---

## ⌨️ Typing Animation

```tsx
import { AnimateTyping } from "react-animate-z";

<AnimateTyping
  dataText={[
    "Hello World",
    "React Animate Z",
    "Built for UX",
  ]}
/>
```

---

## 🎲 Random & Playful Motion

```ts
import { useRandomAnimateNoRepeat } from "react-animate-z";

const play = useRandomAnimateNoRepeat(run, [
  "shakeMix",
  "pulse",
  "flash",
  "jelly",
]);

<button onClick={() => play()}>Surprise me</button>

```

---

## 🪄 AnimatePresence (Enter / Exit)

`AnimatePresence` animates mount / unmount using enter / exit animation pairs,
similar to Framer Motion but lighter, CSS-based, and no styled-components dependency.

#### ✅ Use case
- Modal
- Drawer / Sidebar
- Toast / Snackbar
- Tooltip
- Dropdown
- Conditional UI
---

#### 📌 Basic usage

```tsx
import { AnimatePresence } from "react-animate-z";

function Example({ open }: { open: boolean }) {
  return (
    <AnimatePresence
      show={open}
      enter="fadeIn"
      exit="fadeOut"
      duration={300}
    >
      <div>Hello</div>
    </AnimatePresence>
  );
}

```
---

#### 🔥 Example: Modal

```tsx
<AnimatePresence
  show={open}
  enter="zoomIn"
  exit="fadeOut"
  duration={250}
>
  <div className="modal" />
</AnimatePresence>
```

---


#### 🧠 Behavior timeline

```bash
show = false
  └─ nothing rendered

show = true
  └─ mount
      └─ enter animation

show = false
  └─ exit animation
      └─ wait(duration)
          └─ unmount
```

- Declarative intent, not keyframes
- Timeline-based composition
- Ref-first, framework-agnostic core
- Safe defaults for accessibility

---

## 🧩 Additional APIs

#### Components
- AnimateHost: Low-level animation context host, used for coordinating multiple animated elements.
- WrapperAnimate: Conditional animation wrapper without breaking DOM structure.
- TypingText: Lightweight typing animation for inline text (simpler than AnimateTyping).

#### Hooks
- useAnimateController: Imperative control over animation lifecycle (play, stop, reset).
- useAnimateSequence: Timeline logic as a hook for reusable animation flows.
- useRandomAnimateNoRepeat: Random animation helper with no immediate repetition.
- useRecipe: Semantic, state-driven animation (loading, success, error).

> These APIs are intended for advanced or compositional use cases.
> Most applications only need <Animate /> and useAnimate().

---

## 📜 License

MIT
