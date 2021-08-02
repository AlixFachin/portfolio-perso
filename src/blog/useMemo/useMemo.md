---

title: React optimization - useMemo and useCallback hooks
tags: React.js
slug: react-performance
date: May 7th, 2021
thumb: ./halgatewood-com-unsplash.jpg
description: About component rendering in React.js and their optimization

---


# Summary
In this article we will look at two react hooks `useMemo` and `useCallback`, which will bring us to look at when React renders components.
We will look only at function-based components and not class-based components. (I am not familiar with such class-based components).

![Web front-end design draft](./halgatewood-com-unsplash.jpg)
_Photo by [HalGatewood.com](https://unsplash.com/@halacious?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText") on [Unsplash](https://unsplash.com/s/photos/web-development?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)_

# Level required
This post is meant for developers who just learned the basics about React and would like to know a bit more about some hooks.

# General idea about useMemo and useCallback
Those two hooks are dealing with code optimization first, and are useful for React component rendering optimization. To understand why those two hooks are important, we need to have a look first at when React renders components.

# About component rendering
React is pretty clever in figuring out when to render components and when not to render those.
Basically reacts maintain in memory a virtual DOM tree and checks to see if it needs to re-render this component or not.
For example, React will render a component each time one of its `state` variable is changed. (For more information, look at the official [useState documentation](https://reactjs.org/docs/hooks-reference.html#usestate)).
What is important to remember is that by default, _if a component is rendered, all its children will be rendered again, **even if the props values didn't change**_.
You can see then that if rendering of a child element is expensive (e.g. big computation, network fetch etc...), it becomes interesting to optimize the re-rendering of children components.

# How to figure out if a component is rendered
## Firefox / Chrome dev tools
Second digression, to see visually if a component has been rendered or not, you can use the [React dev tools](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/). In the "component" tab and the "settings" panel (gear wheel) you can check the box "Highlight updates when components render". <br>
Then each time a component renders, its border will flash green.

## Adding a counter
In experimental projects, we can add a counter inside the body of the component. Make sure not to use `useState` to keep track of this variable value. Changing the state would trigger a re-render, which would increment the counter, which would trigger a re-render, etc. Welcome to the world of infinite loops.
To keep the variable counter into memory, we need to use the [`useRef`](https://reactjs.org/docs/hooks-reference.html#useref) hook, which keeps a mutable variable in memory but doesn't trigger a re-render on change.
The code then looks like the following:
```js
function CountComponent(props) {
  const countRef = useRef(0);
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return (<div className="counter">
            <p>Current count: {countRef.current} </p>
          </div>);
}
```

# About useMemo
## Basic case
So let's go back to our original matter, the `useMemo` hook.
The [original useMemo documentation](https://reactjs.org/docs/hooks-reference.html#usememo) explains that `useMemo` is used to "memoize" an object.
`useMemo` takes two parameters:
* an inline function which compute this data's value
* an array of dependencies which helps React to determine when the value should be recomputed. (if passing an empty array `[]`, the value will be computed only once).

Let's look at the following code:
```js
function App() {
  const exampleData = {myString: "React is great"};
  const memoizedData = useMemo(() => exampleData,[]);
  ...
```
Each time the `App` component is rendered, the exampleData will be reloaded in memory, and if it is a big object React will take time to do so.
Using `useMemo` in the second line will prevent this data to be initialized and as such will save some time.

## Combined with the memo() function
Where `useMemo` really shines is when combined with the React `memo()` function.
### What is the react.memo() function
We mentioned at the top that when React renders a component, _all its children component are re-rendered as well, even if their props values didn't change_.
Well the `React.memo()` function is here to help us with that.
The `React.memo` will almost guarantee that the component is not re-rendered when the props don't change.
Please have a look at the following code:
```js
function CountComponent(props) {
  const countRef = useRef(0);
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return (<div className="counter">
            <p>Current count: {countRef.current} </p>
          </div>);
}

const MemoCountComponent = React.memo( (props) =>  {
  const countRef = useRef(0);
  useEffect(() => {
    countRef.current = countRef.current + 1;
  });
  return (<div className="counter">
            <p>Current count: {countRef.current} </p>
          </div>);
});
```
We define two components, `CountComponent` and `MemoCountComponent`, the latter being encapsulated with a `React.memo()` function.
If we run this code we can notice that the `CountComponent` is rendered each time the parent component is rendered, whereas the `MemoCountComponent` is rendered only once.

### Using the useMemo function
As we saw in the previous paragraph, the `React.memo()` function works very well to prevent un-necessary rendering when props don't change.
However, in order to decide whether props did change or not, React is using a shallow comparison. When the props is a Javascript object, a new reference is created at each render and the `React.memo()` triggers re-rendering each time.
If we look at the following component:
```js
const MemoPropsCountComponent = React.memo( (props) => {
  const otherCountRef = useRef(0);
  const testString = 'hello';
  useEffect(() => {
    otherCountRef.current++;
  });
  return (<div className="counter">
            <p>Current count: {otherCountRef.current} </p>
            <p> Function:  {props.stringFunction(testString)} </p>
            <p> Data: {JSON.stringify(props.data)} </p>
          </div>);
});
```
and we include it into an `App` component,
```js
function App() {
  const exampleData = {test: "React is great"};
  const memoizedData = useMemo(() => exampleData,[]);

  return (
    <div className="App">
      <main>
    <MemoPropsCountComponent data={exampleData} />
    <MemoPropsCountComponent data={memoizedData}/>
     </main>
```
We can notice that each time React renders the parent component, it renders the first component but doesn't render the second one. 
This is a good example of optimizing rendering of children components.

## The useCallback hook
React provides a similar hook in order to memoize functions instead of objects.
The [official React documentation for useCallback](https://reactjs.org/docs/hooks-reference.html#usecallback) mentions that `useCallback(myFunction, dependencyArray)` is equivalent to `useMemo(()=>myFunction, dependencyArray)`.
So pretty much everything mentioned above for the `useMemo` is still valid.

Here is an example of use:
```js
function App() {
  const exampleData = {test: "Oui Monsieur"};
  const memoizedData = useMemo(() => exampleData,[]);

  const stringFunction = (s) => s.split("").reverse().join("");
  const memoizedCB = useCallback(stringFunction, []);

  return (
    <div className="App">
      <main>
        <MemoPropsCountComponent data={exampleData} stringFunction={stringFunction} />
       <MemoPropsCountComponent data={memoizedData} stringFunction={stringFunction} />
       <MemoPropsCountComponent data={memoizedData} stringFunction={memoizedCB} />
      </main>
    </div>
  );
}

```
Running the code we can notice that the first two components are rendered at the same time than the parent, but the third component (where all props are memoized) is rendered only once.

# Summary
We looked at how `useMemo` and `useCallback` can be used very efficiently to prevent re-rendering of children React components, when used in combination with the `React.memo()` function.
Two points to note:
* The React API doesn't **guarantee** that the components will not be re-rendered, but the optimization should be pretty solid.
* It is recommended **not** to include any side effects into the `useMemo` or `useCallback` hooks. The side effects should be concentrated into the `useEffect` hook. 

# Code example
Please have a look at: 
<https://alixfachin.github.io/react-test-rendering/>
to see the code in practice.

# Sources - thank you
* <https://felixgerschau.com/react-rerender-components/> for a very detailed post regarding when React renders components.
* <https://learnreact.design/posts/react-useref-by-example> for a very detailed tutorial about the `useRef` hook.

Should you have any questions or comment, please don't hesitate to contact me:
Github: [AlixFachin](https://github.com/AlixFachin)
LinkedIn: [AlixFachin](https://www.linkedin.com/in/alix-fachin/)
Twitter: [@AlixDev5](https://twitter.com/AlixDev5)
