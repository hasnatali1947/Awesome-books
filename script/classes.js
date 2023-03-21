export default class Books {
  constructor() {
    this.books = [];
  }

  add(title, author) {
    this.books.push({ title, author });
  }

  remove(index) {
    this.books = this.books.filter((element, Index) => Index !== parseInt(index, 10));
  }
}
