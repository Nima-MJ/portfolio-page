import { createGlobalStyle } from "styled-components";
// importing createGlobalStyle function from styled-component library. this function allows us to create a global stylesheet
// to apply to all the elements in the document rather than just a component

const GlobalStyle = createGlobalStyle`

*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin: 0;
    padding: 0;
}

h1,h2,h3,h4,h5,h6{
    display: inline-block;
}

body{
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    font-family: 'Source Sans Pro', sans-serif;
}

`

export default GlobalStyle 