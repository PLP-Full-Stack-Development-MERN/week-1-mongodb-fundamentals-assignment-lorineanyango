// Question 1:- Database and Collection Creation

// Switch to the 'library' database
use("library");

// Insert 10 books into the 'books' collection and if the book collection doesnt exist one will be created
db.books.insertMany([
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishedYear: 1813,
    genre: "Romance",
    ISBN: "978-1503290563"
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishedYear: 1951,
    genre: "Fiction",
    ISBN: "978-0316769488"
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishedYear: 1925,
    genre: "Fiction",
    ISBN: "978-0743273565"
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishedYear: 1851,
    genre: "Adventure",
    ISBN: "978-1503280786"
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    publishedYear: 1869,
    genre: "Historical",
    ISBN: "978-1420951080"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishedYear: 1988,
    genre: "Philosophical",
    ISBN: "978-0061122416"
  },
  {
    title: "1984",
    author: "George Orwell",
    publishedYear: 1949,
    genre: "Dystopian",
    ISBN: "978-0451524935"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishedYear: 1960,
    genre: "Fiction",
    ISBN: "978-0061120084"
  },
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publishedYear: 1932,
    genre: "Dystopian",
    ISBN: "978-0060850524"
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishedYear: 1866,
    genre: "Philosophical",
    ISBN: "978-0486415871"
  }
]);

// Question 3
db.books.find({}); // retrieving all the books

db.books.find({ author: "Jane Austen" }); // Query books based on a specific author.

db.books.find({ publishedYear: { $gt: 2000 } });

// Question 4
db.books.updateOne(
  { title: "The Great Gatsby" }, 
  { $set: { publishedYear: 1926 } }
);

db.books.updateMany(
  {}, 
  { $set: { rating: 4.5 } }
);

//Question 5
db.books.deleteOne({ ISBN: "978-1234567890" });

db.books.deleteMany({ genre: "Science Fiction" });

//Question 6 
db.books.aggregate([
  {
    $group: {
      _id: "$genre", // Group by genre
      totalBooks: { $sum: 1 } // Count books in each genre
    }
  }
]);


db.books.aggregate([
  {
    $group: {
      _id: null, // Group all books together
      avgPublishedYear: { $avg: "$publishedYear" } // Calculate average
    }
  }
]);


db.books.aggregate([
  { $sort: { rating: -1 } }, // Sort by rating (highest first)
  { $limit: 1 } // Get only the top-rated book
]);

//Question 8
db.books.createIndex({ author: 1 });

//importance of indexing; Faster Query Execution, Optimized Sorting, Improved Performance for Large Collections



//Question 7 Data modelling:- E-commerce part

// 1. Select or create the "ecommerce" database
use ("ecommerce");

// 2. Create the "users" collection and insert users
db.users.insertMany([
  {
    name: "Alice Johnson",
    email: "alice@example.com",
    address: "123 Main St, Springfield",
    phone: "123-456-7890"
  },
  {
    name: "Bob Smith",
    email: "bob@example.com",
    address: "456 Elm St, Shelbyville",
    phone: "987-654-3210"
  }
]);

// 3. Create the "products" collection and insert products
db.products.insertMany([
  {
    name: "Wireless Mouse",
    category: "Electronics",
    price: 25.99,
    stock: 50
  },
  {
    name: "Laptop Stand",
    category: "Accessories",
    price: 39.99,
    stock: 30
  },
  {
    name: "Bluetooth Headphones",
    category: "Audio",
    price: 59.99,
    stock: 20
  }
]);

// 4. Create the "orders" collection and insert orders (Referencing Users & Products)
db.orders.insertMany([
  {
    userId: ObjectId("67ab3c507dc4641a134d7942"),
    products: [
      { productId: ObjectId("67ab3cbf7dc4641a134d7944"), quantity: 2 }, 
      { productId: ObjectId("67ab3cbf7dc4641a134d7945"), quantity: 1 }
    ],
    totalAmount: 91.97,
    status: "Shipped",
    orderDate: new Date()
  },
  {
    userId: ObjectId("67ab3c507dc4641a134d7943"), 
    products: [
      { productId: ObjectId("67ab3cbf7dc4641a134d7946"), quantity: 1 }
    ],
    totalAmount: 59.99,
    status: "Processing",
    orderDate: new Date()
  }
]);




