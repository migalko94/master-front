console.log("************** DELIVERABLE 04 *********************");

interface Book {
  title: string;
  isRead: boolean;
}

const books: Book[] = [
  { title: "Harry Potter y la piedra filosofal", isRead: true },
  { title: "Canción de hielo y fuego", isRead: false },
  { title: "Devastación", isRead: true },
];

console.log(
  "***Solución 1_modificado - no puede leer propiedades de undefined***"
);
function isBookRead(books: Book[], titleToSearch: string): boolean {
  const title = books.find((book) => book.title === titleToSearch);

  return title?.isRead ?? false;
}

console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

console.log("***Solución 2***");
const isBookReadAlternative = (books: Book[], titleToSearch: string): boolean =>
  books.some((book) => book.title === titleToSearch && book.isRead === true);

console.log(isBookReadAlternative(books, "Devastación")); // true
console.log(isBookReadAlternative(books, "Canción de hielo y fuego")); // false
console.log(isBookReadAlternative(books, "Los Pilares de la Tierra")); // false
