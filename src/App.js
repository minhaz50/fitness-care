import { Route, Router } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home/Components/Home/Home";
import About from "./pages/About/About";
import Header from "./sharedComponents/Header/Header";
import Contact from "./pages/Contact/Components/Contact/Contact";
import ServiceDetails from "./pages/ServiceDetails/Components/ServiceDetails/ServiceDetails";
import Blog from "./pages/Blog/Components/Blog/Blog";
import Services from "./pages/Home/Components/Services/Services";
import Registration from "./pages/Registration/Components/Registration/Registration";
import Login from "./pages/Login/Components/Login/Login";
import NotFound from "./pages/NotFound/Components/NotFound/NotFound";
import Footer from "./sharedComponents/Footer/Footer";

function App() {
  return (
    <div>
      <AuthProvider>
        <Header></Header>
        <Router>
          <switch>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contact" element={<Contact></Contact>}></Route>
            <Route
              path="/service/:serviceId"
              element={<ServiceDetails></ServiceDetails>}
            ></Route>
            <Route path="/blog" element={<Blog></Blog>}></Route>
            <Route path="/service" element={<Services></Services>}></Route>
            <Route
              path="/registration"
              element={<Registration></Registration>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
