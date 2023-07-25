import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";

import Navbar from './components/Navbar';
import EmployeeList from "./components/EmployeeList";
import LoginForm from "./components/forms/LoginForm";
import Schedule from "./components/Schedule/Schedule";
import AccountPage from "./components/AccountPage";
import PositionList from "./components/PositionList";
import AddCompany from "./components/partials/AddCompany";
import AddUserProfile from './components/partials/AddUserProfile';
import LandingPage from "./components/LandingPage";
import Footer from "./components/Footer";

import Auth from './utils/auth';
import Account from "./components/Account";
import RequestSignIn from "./components/partials/RequestSignIn";

import TestPage from './components/TestPage';

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
              element={Auth.loggedIn() ? <Navigate to='/schedule' replace='true'/> : <LandingPage />}
            />
            <Route
              path='/login'
              element={<LoginForm />}
            />
            <Route
              path='/schedule'
              element={Auth.loggedIn() ? <Schedule /> : <RequestSignIn/>}
            />
            <Route
              path='/account'
              element={
                Auth.loggedIn() ?
                  (Auth.hasUser() ? (
                    Auth.hasCompany() ? 
                      <AccountPage/> 
                    : <AddCompany/>) 
                  : <AddUserProfile />)
                : <RequestSignIn/>
              }
            />
            <Route
              path='/positions'
              element={Auth.loggedIn() ? <PositionList /> : <RequestSignIn/>}
            />
            <Route
              path='/employees'
              element={Auth.loggedIn() ? <EmployeeList /> : <RequestSignIn/>}
            />
            <Route
              path='/test'
              element={<TestPage/>}
            />
          </Routes>
          <Footer />
      </Router>
    </ApolloProvider>
  );
}

export default App;
