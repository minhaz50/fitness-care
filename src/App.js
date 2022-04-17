import { Router } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router></Router>
      </AuthProvider>
    </div>
  );
}

export default App;
