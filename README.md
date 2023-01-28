Used styled-components library to create and style the elements on the page. 
# index.js

App component in the index.js are wrapt around a <BrowserRouter> which is a is a client-side rendering component, it is executed in the browser and it uses the HTML5 history API to keep the UI in sync with the URL.
When the application is loaded in the browser, the <BrowserRouter> component listens to changes in the URL, and it matches the current URL with the set of predefined routes.
Then it updates the UI accordingly by rendering the appropriate component that matches the current URL, without the need to refresh the page.

# app.js

In the app.js file we use the <Switch> component associated with the <BrowserRouter> component in the index.js file.
This code is defining a set of client-side routes for a React application using the <Switch>, <Route> components from the react-router-dom library.

The <Switch> component is used to define a set of routes for the application. The <Route> component is used to define a route, it takes a path prop which is the path that the route should match, and a component prop which is the component that should be rendered when the path matches.

# AllSvg.js
Used Font Awsome to import all the required logos. This way logos can be imported and reused easier. 