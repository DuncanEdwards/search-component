import booksJson from "./data/books.json";

export const DEFAULT_BOOKS_PAGE_SIZE = 9;

export type Book = {
  id: number;
  title: string;
  imageUrl: string;
  genres: string[];
  author: string;
};

export const getBooks = async (genres: string[] = []): Promise<Book[]> => {
  console.log("getBooks", genres);
  await new Promise((r) => setTimeout(r, 20));
  const filteredJson =
    genres.length > 0
      ? booksJson.filter((book) => doArraysIntersect(genres, book.genres))
      : booksJson;

  const books = filteredJson.sort((item1, item2) =>
    item1.title > item2.title ? 1 : -1
  );

  return books;
};

const doArraysIntersect = (filterGenres: string[], bookGenres: string[]) =>
  bookGenres.some((genre) => filterGenres.includes(genre));
