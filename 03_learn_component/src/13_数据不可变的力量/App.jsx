import React, { PureComponent } from "react";

export class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      books: [
        { name: "你不知道的js", price: 99, count: 1 },
        { name: "js高级", price: 88, count: 41 },
        { name: "react高级设计", price: 77, count: 2 },
        { name: "你不知道ss", price: 66, count: 3 },
      ],
    };
  }
  addNewBook() {
    const newBook = { name: "angular的高级设计", price: 11, count: 3 };
    const books = [...this.state.books, newBook];
    this.setState({
      books,
    });
  }
  addBookCount(index) {
    console.log("点击了index", index);
    // this.state.books[index].count++;
    const books = [...this.state.books];
    books[index].count++;
    this.setState({
      books: books,
    });
  }
  render() {
    const { books } = this.state;
    return (
      <div>
        <h2>数据列表</h2>
        <ul>
          {books.map((item, index) => {
            return (
              <li key={item.name}>
                name:{item.name}-price:{item.price}-count:{item.count}
                <button onClick={(e) => this.addBookCount(index)}>+1</button>
              </li>
            );
          })}
        </ul>
        <button onClick={(e) => this.addNewBook()}>添加新书籍</button>
      </div>
    );
  }
}

export default App;
