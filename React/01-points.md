1. Working with relative path using create-react-app
https://medium.com/@leonardobrunolima/react-tips-working-with-relative-path-using-create-react-app-fe55c5f97a21

2. The Switch component renders the first child that matches the location. Once it finds the matching route it stops searching for another.

3. Redux-thunk : This library enables us to send async requests with the Redux actions.

4. Lazing Loading
loading our component eagerly and not lazily, which means that once the application starts all the resources are loaded as well. This is not the best practice because a user might never visit the page, therefore the resources for this page shouldn’t be loaded either.

5. useState, is deiifferent from class state. useState doesn't preserve object. e.g {...name , firstName:'Gaurav Jain} to keep all values.
That is the not a case in class state.

6. In TypeScript : You can no longer import React from 'react';. React is exported as a CommonJS module which does not use a default export. Use : import * as React from 'react'; import * as ReactDOM from 'react-dom';

7. ServiceWorker :
a. You may not need a service worker for your application. If you are creating a project with create-react-app it is invoked by default

b. A service worker is a script that your browser runs in the background, separate from a web page, opening the door to features that don't need a web page or user interaction. Today, they already include features like push notifications and background sync and have ability to intercept and handle network requests, including programmatically managing a cache of responses.

c. In the future, service workers might support other things like periodic sync or geofencing.

8. React Hot Loader (react-hot-loader) npm
React Hot Loader is a plugin that allows React components to be live reloaded without the loss of state. It works with Webpack and other bundlers that support both Hot Module Replacement (HMR) and Babel plugins.

9. BrowserRouter vs HashRouter vs MemoryRouter
https://learnwithparam.com/blog/different-types-of-router-in-react-router/

10. All type of routers
https://reactrouter.com/web/guides/quick-start

11. It’s better to have one stateful component to load data and another stateless component to display that data. This reduces the complexity of the components.

12. All files related to any one component should be in a single folder: Keep all files relating to any one component in a single folder, including styling files. large components have their own folder and all their smaller parts are split into sub-folders.

13. Linting is a process wherein we run a program that analyses code for potential errors.: Mostly, we use it for language-related issues. But it can also fix many other issues automatically, particularly code style. Using a linter in your React code helps to keep your code relatively error- and bug-free.

14. High-Order Component High-Order Component (or HOC) is essentially a design pattern, also known as a Decorator Pattern.

15. In ReactJS, a HOC is a component that wraps another component by adding extra functionality or extra properties. This allows abstraction from some commonly used logic and keeps your code DRY. It is how you distribute complex component structure between other components in ReactJS and a way to decouple your application logic and UI. For instance, you may use container component as a HOC for your presentational Button component.

16. Container components Container components, on the other hand, have logic to set state or have functions to emit events up to a parent component. The general rule of the thumb is to keep your component as simple as possible with a Single Responsibility Principle design principle in mind, which essentially means your component must do one thing, but do it well. Most often, these types of components are the HOCs that accommodate few presentational components. Presentational components Writing simple components may reduce your overall application complexity. Here is where presentational components come into play. These components should have minimal to no logic. Presentational components accept data and emit events to a callback that they receive as part of its props. Essentially, this type of component renders UI and executes a function that was passed into it when some action in its UI happens. This type of component is a building block and is sometimes referred to as a Low-Order Component (or LOC).







