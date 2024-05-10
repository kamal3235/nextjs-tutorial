import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";
// import "styles/globals.css"; dont need this here

export default function Home() {
  return (
    <main>
      <h1>Hello World from Abu Kamal</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
