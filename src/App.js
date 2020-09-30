import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Header from './Header';
import Home from './Home';
import { useStateValue } from './StateProvider'
import { auth } from './firebase';

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    // run this piece of code once when the app component loads
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // user logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })

      } else {
        //user logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      // any clean up operations
      unsubscribe();
    }
  }, [])

  console.log("user>>>", user)

  return (
    <BrowserRouter>
      <div className="App">
        <Switch >
          <Route path="/" exact >
            <Header />
            <Home />
          </Route>
          <Route path="/checkout" >
            <Header />
            <Checkout />
          </Route>
          <Route path="/login" component={Login} />
        </Switch>

      </div>
    </BrowserRouter>

  );
}

export default App;
