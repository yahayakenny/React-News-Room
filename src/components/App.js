import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import Home from './Home';
import BestSellers from './BestSellers';
import MovieReviews from './MovieReviews';
import NavBar from './NavBar';
import './css/Books.css'
import './css/Home.css'

export class App extends Component {
    render() {
        return (
            <BrowserRouter>
            <div>
              <NavBar/>
                <Switch>
                 <Route path="/" component={Home} exact/>
                 <Route path="/best-sellers" component={BestSellers}/>
                 <Route  path = "/movie-reviews" component={MovieReviews}/>
               </Switch>
            </div> 
          </BrowserRouter>
        )
    }
}

export default App
