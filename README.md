# Portfolio Website

Building a portfolio website in React involved learning about:

- Complex styling with styled-components
- Page transitions with Framer-motion
- Advantages of component structure
- ParticleJS for background effects
- Lazy loading and suspense for faster components
- Pure CSS animations.

## index.js

App component in the index.js are wrapt around a <BrowserRouter> which is a is a client-side rendering component, it is executed in the browser and it uses the HTML5 history API to keep the UI in sync with the URL.
When the application is loaded in the browser, the <BrowserRouter> component listens to changes in the URL, and it matches the current URL with the set of predefined routes.
Then it updates the UI accordingly by rendering the appropriate component that matches the current URL, without the need to refresh the page.

## app.js

In the app.js file we use the <Switch> component associated with the <BrowserRouter> component in the index.js file.
This code is defining a set of client-side routes for a React application using the <Switch>, <Route> components from the react-router-dom library.

The <Switch> component is used to define a set of routes for the application. The <Route> component is used to define a route, it takes a path prop which is the path that the route should match, and a component prop which is the component that should be rendered when the path matches.

## AllSvg.js

Used Font Awsome to import all the required logos. This way logos can be imported and reused easier.


# Anchor.js 
Anchor.js is used for the anchor animation in the projects page. It uses the useEffect hook to add an event listener to the scroll event of the window object. When the user scrolls the page, the handleScroll function will be called, and it will perform some calculations and update the style of an element referenced by the ref object.

Here's what the handleScroll function does:

- It retrieves the current scroll position of the page by reading the pageYOffset property of the window object.
- It retrieves the current size of the window by reading the innerHeight property of the window object.
- It retrieves the height of the document body by reading the offsetHeight property of the document.body object.
- It calculates the difference between the height of the body and the sum of the current scroll position and window size.
- It calculates the percentage of this difference as a percentage of the total height of the window.
- It sets the transform style of the element referenced by the ref object to translate it vertically by the calculated percentage.

The useEffect hook returns a cleanup function that removes the scroll event listener from the window object when the component is unmounted. This helps to prevent memory leaks and improve performance.