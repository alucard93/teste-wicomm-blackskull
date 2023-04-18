// reset
import { GlobalStyle } from "./styles/global";

// tema
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";

// lib rota
import { Router } from "./route/Router";
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <Router />
          <GlobalStyle />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
