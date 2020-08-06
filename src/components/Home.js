import React, { Component } from 'react';
import axios from 'axios';
import './css/Home.css'

export class Home extends Component {
    state = {
        home : []
    }

    componentDidMount() {
        axios.get('https://api.nytimes.com/svc/topstories/v2/home.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7')
        .then (res => {
            console.log(res.data.results)
            const getHome = res.data.results;
            this.setState({home: getHome})
            
        })
      }

    render() {
        return (
            <div>
               {
                  <div className = "container">
                      <div className = "row">
                            <div className = "col-xs-12 col-md-6 col-lg-6">
                                {/* {this.state.home.map(item => (
                                    <p>{item.title}</p>
                                ))} */}

                                {/* {this.state.home[0].title} */}
                               
                            </div>
                            <div className = "col-xs-12 col-md-6 col-lg-6">

                            </div>
                        </div>
                  </div>
                   
               }
            </div>
        )
    }
}

export default Home

