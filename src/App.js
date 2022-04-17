import { Route, Router } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import About from "./pages/About/About";
import Header from "./sharedComponents/Header/Header";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <Router>
          <switch>
            <Route to="/about" element={<About></About>}></Route>
          </switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
