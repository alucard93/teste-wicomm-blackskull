import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
      </ThemeProvider>
    </div>
  );
}

export default App;
