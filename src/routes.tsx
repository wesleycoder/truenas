import { Link, Route, Routes } from "solid-app-router";
import About from "./pages/About";
import Home from "./pages/Home";

export default function AppRoutes() {
  return (
    <>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}
