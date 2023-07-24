import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from './components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import EmployeeList from "./components/EmployeeList";
import LoginForm from "./components/forms/LoginForm";
import RegisterForm from "./components/forms/RegisterForm";
import Schedule from "./components/Schedule/Schedule";
import Admin from "./components/Admin";
import PositionList from "./components/PositionList";
import AddCompany from "./components/AddCompany";
import AddUserProfile from './components/AddUserProfile';
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <Navbar />
          <Routes>
            <Route
              path='/'
              element={<LandingPage />}
            />
            <Route
              path='/login'
              element={<LoginForm />}
            />
            <Route
              path='/register'
              element={<RegisterForm />}
            />
            <Route
              path='/schedule'
              element={<Schedule />}
            />
            <Route
              path='/account'
              element={<Admin />}
            />
            <Route
              path='/positions'
              element={<PositionList />}
            />
            <Route
              path='/employees'
              element={<EmployeeList />}
            />
            <Route
              path="/createCompany"
              element={<AddCompany />}
            />
            <Route
              path="/createUser"
              element={<AddUserProfile />}
            />
          </Routes>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
