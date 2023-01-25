import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { DarkTheme, LightTheme } from "./components/Themes";
import GlobalStyle from "./globalStyles";

//components
import Main from "./components/Main";
import ProjectsPage from "./components/ProjectsPage";
import AboutPage from "./components/AboutPage";
import WorkPage from "./components/WorkPage";
import MySkillsPage from "./components/MySkillsPage";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={LightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/projects" component={ProjectsPage} />
          <Route exact path="/work" component={WorkPage} />
          <Route exact path="/skills" component={MySkillsPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
