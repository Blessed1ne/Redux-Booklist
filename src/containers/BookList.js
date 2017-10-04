import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook }  from '../actions/index';
import { bindActionCreators } from 'redux';


class BookList extends Component {
  render() {
  
        const item = this.props.books.map((book) => {
            console.log(book)
            return (
                <li
                    key={book.id}
                    onClick={() => this.props.selectBook(book)}
                    className="list-group-item">
                    {book.title}
                </li>
            )
        })
    return (

        <div class="jumbotron jumbotron-fluid col-sm-6" >
            <div class="container">
                  <ul className="list-group">
                    {item}
                  </ul>
            </div>
        </div>

    );
  }
}

function mapStateToProps(state) {
  console.log("mapstate", state.books);

  return {
    books: state.books,
  };
}


function mapDispatchToProps(dispatch) {

    return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
