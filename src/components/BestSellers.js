import React, { Component } from 'react'
import axios from 'axios';

export class BestSellers extends Component {
    state = {
        books : []
    }

  componentDidMount() {
     axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=OtN5TgEakuRqnuUsHHxWTfMISpfrrAV7')
     .then (res => {
         const getBooks = res.data.results.books
         this.setState({books: getBooks})
     })
   }

    render() {
        return (
            <div>
              {this.state.books.map (item => (
                 <div className = "container book">
                     <div className = "row">
                     <div className = "col-sm-12 col-xs-12 col-md-6">
                        <img src = {item.book_image} class = "image" alt = ""/>  
                     </div>
                     <div className = "col-sm-12 col-xs-12 col-md-6">
                        <h1 style={{ color: 'red' }}>Title: {item.title}</h1>
                        <h3>Rank: {item.rank}</h3>
                        <h4>Author: {item.author}</h4>
                        <h5>Description: {item.description}</h5>
                        <h6>Publisher: {item.publisher}</h6>
                        <h6>ISBN: {item.isbns[0].isbn10}</h6>
                        <h6>Rank Last Week: {item.rank_last_week}</h6>
                        <h6>Weeks on List: {item.weeks_on_list}</h6>
                        <div classNameName = "stores">
                            <div className = "amazon">
                                <a href = {item.buy_links[0].url} alt = "" style={{ color: 'teal' }}><i className="fab fa-amazon"></i>Amazon Books</a>
                            </div>

                            <div className = "barnes">
                                 <a href = {item.buy_links[2].url} style={{ color: 'teal' }}><i className="fas fa-book"></i>Barnes and Noble</a> 
                            </div> 
                            <div className = "apple">
                                <a href = {item.buy_links[1].url} style={{ color: 'teal' }}><i className="fab fa-apple"></i>Apple Books</a><hr/>
                             </div>                          
                        </div>                   
                     </div>
                    </div>   
                 </div>
              ))}
            </div>
        )
    }
}

export default BestSellers
