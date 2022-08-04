import React, { Component } from "react";
import { Link } from "react-router-dom";
import Book from "./BookComponent";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }
  onSearch = (ele) => {
    this.setState({
      search: ele.target.value,
    });
  };
  setBookType = (ele) => {
    this.props.type(ele);
  };
  render() {
    return (
      <>
        <div className="search-bar">
          <Link to="/">&#8592;</Link>
          <input
            type="text"
            placeholder="Search by title or author"
            onChange={this.onSearch}
          />
        </div>
        <h1>
          {
            this.props.books.filter((book) => {
              return book.title.toLowerCase().includes(this.state.search);
            }).length
          }{" "}
          books found
        </h1>
        <br />
        <div className="search-books">
          {this.props.books
            .filter((book) => {
              return book.title.toLowerCase().includes(this.state.search);
            })
            .map((book) => {
              return (
                <Book
                  key={book.id}
                  id={book.id}
                  title={book.title}
                  author={book.author}
                  img={book.img}
                  setBook={this.setBookType}
                />
              );
            })}
        </div>
      </>
    );
  }
}
