import BookCard from "../components/BookCard";

const Home = () => {
  const books = [
    { id: 1, title: "Book 1", author: "Author 1", price: 20, image: "book1.jpg" },
    { id: 2, title: "Book 2", author: "Author 2", price: 25, image: "book2.jpg" },
  ];

  return (
    <div>
      <h1>Welcome to Our Online Bookstore</h1>
      <div className="book-list">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Home;
