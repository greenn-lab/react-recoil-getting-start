# Getting Started with Create React App
간단하게 [recoil](https://recoiljs.org/docs/introduction/getting-started/) 을 해봐요.

```shell
npx create-react-app react-recoil-getting-start
cd react-recoil-getting-start
```
프로젝트를 간단하게 생성하고,
```shell
pnpm add recoil
```
요즘 `pnpm` 이 제일 빠른것 같아서 그냥 습관적으로 쓰는 패키지 매니저에요.

## RecoilRoot
리코일 상태를 사용하기 위해서는 `<RecoilRoot />` 이 상위 트리 어딘가에 있어야 하네요. 좋은 자리는 최상위 컴포넌트 고요.
```js
import React from 'react';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';

function App() {
  return (
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
  );
}
```
`<CharacterCounter />` 는 나중에 구현하게 될거래요.

## atom
`상태(state)`를 나타내고, 어느 컴포넌트에서든 읽고 쓰기가 가능하대요. 값을 읽은 컴포넌트는 암묵적으로 구독이 되어서 값이 변할 때, 컴포넌트가 다시 랜더링 되고요.
```js
const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});
```
위 정의된 atom 을 읽을 때는, `useRecoilState()` 를 쓰는데,
```js
function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

function TextInput() {
  const [text, setText] = useRecoilState(textState); // 🔥

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={onChange} />
      <br />
      Echo: {text}
    </div>
  );
}
```

## Selector
`파생된 상태(derived state)`를 정의하는데 쓰이는데, 상태를 순수함수로 변경된 값을 준다는 거에요. vue 의 `computed()` 와 같은건데...
```js
const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});
```
이건 상태랑 달라서 `useRecoilValue()` 를 통해서 읽어요.
```js
function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}
```

---
나머지는 코드로 보시죠.  
커밋 히스토리 또는 브렌치로 단계별 진행을 해볼게요.
