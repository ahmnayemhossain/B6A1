function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  } else {
    return value;
  }
}

function getLength(value: string | Array): number {
  return value.length;
}

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

type Item = {
  title: string;
  rating: number;
};

function filterByRating(items: Item[], tRating: number = 4): Item[] {
  return items.filter((item) => item.rating >= tRating);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => {
    if (user.isActive) {
      return user;
    }
  });
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

function printBookDetails(book: Book) {
  const availability = book.isAvailable ? "Yes" : "No";

  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published Year: ${book.publishedYear}, Available: ${availability}`
  );
}

function getUniqueValues<T>(array1: T[], array2: T[]): T[] {
  const set = new Set<T>([...array1, ...array2]);
  return Array.from(set);
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

function calculateTotalPrice(products: Product[]): number {
  return products.reduce((total, product) => {
    const discount = product.discount ? product.discount : 0;
    const discountedPrice = product.price - (product.price * discount) / 100;
    return total + discountedPrice * product.quantity;
  }, 0);
}
