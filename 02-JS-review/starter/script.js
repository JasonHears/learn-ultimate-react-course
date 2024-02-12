const data = [
  {
    id: 1,
    title: "The Lord of the Rings",
    publicationDate: "1954-07-29",
    author: "J. R. R. Tolkien",
    genres: [
      "fantasy",
      "high-fantasy",
      "adventure",
      "fiction",
      "novels",
      "literature",
    ],
    hasMovieAdaptation: true,
    pages: 1216,
    translations: {
      spanish: "El señor de los anillos",
      chinese: "魔戒",
      french: "Le Seigneur des anneaux",
    },
    reviews: {
      goodreads: {
        rating: 4.52,
        ratingsCount: 630994,
        reviewsCount: 13417,
      },
      librarything: {
        rating: 4.53,
        ratingsCount: 47166,
        reviewsCount: 452,
      },
    },
  },
  {
    id: 2,
    title: "The Cyberiad",
    publicationDate: "1965-01-01",
    author: "Stanislaw Lem",
    genres: [
      "science fiction",
      "humor",
      "speculative fiction",
      "short stories",
      "fantasy",
    ],
    hasMovieAdaptation: false,
    pages: 295,
    translations: {},
    reviews: {
      goodreads: {
        rating: 4.16,
        ratingsCount: 11663,
        reviewsCount: 812,
      },
      librarything: {
        rating: 4.13,
        ratingsCount: 2434,
        reviewsCount: 0,
      },
    },
  },
  {
    id: 3,
    title: "Dune",
    publicationDate: "1965-01-01",
    author: "Frank Herbert",
    genres: ["science fiction", "novel", "adventure"],
    hasMovieAdaptation: true,
    pages: 658,
    translations: {
      spanish: "",
    },
    reviews: {
      goodreads: {
        rating: 4.25,
        ratingsCount: 1142893,
        reviewsCount: 49701,
      },
    },
  },
  {
    id: 4,
    title: "Harry Potter and the Philosopher's Stone",
    publicationDate: "1997-06-26",
    author: "J. K. Rowling",
    genres: ["fantasy", "adventure"],
    hasMovieAdaptation: true,
    pages: 223,
    translations: {
      spanish: "Harry Potter y la piedra filosofal",
      korean: "해리 포터와 마법사의 돌",
      bengali: "হ্যারি পটার এন্ড দ্য ফিলোসফার্স স্টোন",
      portuguese: "Harry Potter e a Pedra Filosofal",
    },
    reviews: {
      goodreads: {
        rating: 4.47,
        ratingsCount: 8910059,
        reviewsCount: 140625,
      },
      librarything: {
        rating: 4.29,
        ratingsCount: 120941,
        reviewsCount: 1960,
      },
    },
  },
  {
    id: 5,
    title: "A Game of Thrones",
    publicationDate: "1996-08-01",
    author: "George R. R. Martin",
    genres: ["fantasy", "high-fantasy", "novel", "fantasy fiction"],
    hasMovieAdaptation: true,
    pages: 835,
    translations: {
      korean: "왕좌의 게임",
      polish: "Gra o tron",
      portuguese: "A Guerra dos Tronos",
      spanish: "Juego de tronos",
    },
    reviews: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 2295233,
        reviewsCount: 59058,
      },
      librarything: {
        rating: 4.36,
        ratingsCount: 38358,
        reviewsCount: 1095,
      },
    },
  },
];

function getBooks() {
  return data;
}

function getBook(id) {
  return data.find((d) => d.id === id);
}

// const books = getBooks();

// const book = getBook(3);
// const { title, author, pages, publicationDate, genres, hasMovieAdaptation } =
//   book;
// console.log(title, author, genres);

// [primaryGenre, secondaryGenre, ...otherGenres] = genres;

// console.log(primaryGenre, secondaryGenre, otherGenres);

// const newGenres = [...genres, "epic fantasy"];

// console.log(newGenres);

// const updatedBook = {
//   ...book,
//   moviePublicationDate: "05-06-1975",
//   pages: 12345, // will overwrite original property when it comes after the spread operator
// };

// console.log(updatedBook);

// const summary = `${title} is a book`;
// summary;

// console.log(true && "This is returned");
// console.log(false && "this is not returned");

// console.log(true || "This is not returned");
// console.log(false || "This is returned");

// // || uses flasey values: 0, '', null, undefined
// const wrongCount = book.reviews.librarything?.reviewsCount || "No data";
// wrongCount;

// // ?? - only null or undefined
// const correctCount = book.reviews.librarything?.reviewsCount ?? "No data";
// correctCount;

// // optional chaining on book.reviews.librarything since it doesn't always exist
// const chainedValue =
//   (book.reviews?.goodreads?.reviewsCount ?? 0) +
//   (book.reviews?.librarything?.reviewsCount ?? 0);
// console.log(chainedValue);

/**
const books = getBooks();

books;

const x = [1, 2, 3, 4, 5].map((el) => el * 2);
x;

const titles = books.map((book) => book.title);
titles;

const importantData = books.map((book) => ({
  title: book.title,
  author: book.author,
}));
importantData;

const longBooks = books
  .filter((book) => book.pages > 500)
  .filter((book) => book.hasMovieAdaptation)
  .map((book) => book.title);
longBooks;

const allBooksPages = books.reduce((acc, book) => acc + book.pages, 0);
allBooksPages;

let arr = [2, 5, 1, 13, 8, 3];
arr;
let sorted = arr.sort((a, b) => a - b); // sort mutates original array
arr;
sorted;

arr = [2, 5, 1, 13, 8, 3];
sorted = arr.slice().sort((a, b) => a - b);
arr;
sorted;

const sortedByPages = books.slice().sort((a, b) => a.pages - b.pages);
const pages = sortedByPages.map((a) => `${a.title}, ${a.pages}`);
pages;

const newBook = {
  id: 6,
  title: "Hi Hungry, I'm Dad!",
  author: "Jason Holderness",
  pages: 27,
};

const booksAfterAdd = [...books, newBook];
booksAfterAdd;

const booksAfterDelete = booksAfterAdd.filter((book) => book.id !== 6);
booksAfterDelete;

const booksAfterUpdate = booksAfterDelete.map((book) =>
  book.id === 1 ? { ...book, title: `New Release: ${book.title}` } : book
);
booksAfterUpdate;
*/

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => console.log(data[0]));

async function getTodo() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data[0]);
}

getTodo();
