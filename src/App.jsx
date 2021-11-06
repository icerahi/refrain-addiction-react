import Header from "./pages/shared/header/Header";
import Home from "./pages/home/Home";
import Footer from "./pages/shared/footer/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ServiceDetail from "./pages/serviceDetail/ServiceDetail";
import NotFound from "./pages/notFound/NotFound";
import ServiceDataProvider from "./context/ServiceDataProvider";
import Services from "./pages/services/Services";
import About from "./pages/about/About";
import BookAppointment from "./pages/book-appointment/BookAppointment";
import Login from "./pages/login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from './route/PrivateRoute'
 
function App() {
 
  return (
    <AuthProvider>
      <ServiceDataProvider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <PrivateRoute exact path="/services" component={Services} />
            <PrivateRoute exact path="/service/:slug" component={ServiceDetail} />
            <Route exact path="/about" component={About} />
            <PrivateRoute exact path="/book-appointment" component={BookAppointment} />
            <Route exact path="/login" component={Login} />
            <Route path="*" component={NotFound} />
          </Switch>
          <Footer />
        </BrowserRouter>
      </ServiceDataProvider>
    </AuthProvider>
  );
}

export default App;
