import React, { Suspense, useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes";
import Layout from "./components/Layout";
import ThemeProvider from "./context/ThemeProvider";
import  ThemeContext  from "./context/ThemeContext";
import useTheme from "./useTheme";

function App() {
  // const { theme } = useTheme();

  return (
    
    <ThemeProvider>
      <Router>
        <div className={`app`}>
          <Layout>
            <Suspense fallback={<h1>Loading</h1>}>
              <Routes />
            </Suspense>
          </Layout>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
