import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from './components/Navbar';
import Loginform from './components/Loginform';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.min.js";
import "./components/Loginform.css";
import EmployeeList from "./components/EmployeeList";
import EmployeeForm from './components/EmployeeForm';
import Loginform from './components/Loginform';
import Schedule from "./components/Schedule/Schedule";

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
          {/* <Navbar /> */}
          {/* <Loginform /> */}
          <Navbar />
          <Schedule/>
          <EmployeeForm/>
      </Router>
    </ApolloProvider>
  );
}

export default App;
