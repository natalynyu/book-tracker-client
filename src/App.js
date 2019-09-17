import React from 'react'
import './App.css'

const testData = {
  books: [
    {title: "Harry Potter and the Sorcerer's Stone", author: "J. K. Rowling",
      completionDate: "2019-09-10"},
    {title: "Harry Potter and the Chamber of Secrets", author: "J. K. Rowling",
      completionDate: "2019-09-12"}
  ]
}

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: testData
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Book Tracker</h1>
        <table>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Date Completed</th>
          </tr>
          {this.state.data.books.map(book => {
          return <tr>
            <td key={book.title}>{book.title}</td>
            <td key={book.author}>{book.author}</td>
            <td key={book.completionDate}>{book.completionDate}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
          </tr>
          })}
        </table>
      </div>
    )
  }
}

export default App