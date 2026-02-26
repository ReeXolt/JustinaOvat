import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/home/Home";
import { About } from "./pages/about/About";
// import { Footer } from "./components/footer/Footer";
import { UpperNav } from "./components/navbar/UpperNav";
import { Book } from "./pages/book/Book";
import { Contact } from "./pages/contact/Contact";
import { PressDetails } from "./pages/about/components/PressDetails";
import { BookDetails } from "./pages/bookDetails/BookDetails";
import { BlogPage } from "./pages/blog/BlogPage";
import { BlogDetails } from "./pages/blog/components/BlogDetails";
import { WorkWithJoPage } from "./pages/work-wit-JO/WorkWithJoPage";
import { Privacy } from "./pages/privacy/Privacy";
import { ScrollToTopButton } from "./components/ScrollToTop";
import { Organizations } from "./pages/organizations";
import Podcast from "./pages/podcast/Podcast";
import { AfieguEvents } from "./pages/afieguEvents/AfieguEvents";

function App() {
  return (
    <div>
      <UpperNav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/podcast" element={<Podcast />} />
        <Route path="/afiegu" element={<AfieguEvents />} />
        <Route path="/TSC" element={<Organizations />} />
        <Route path="/about/details/:id" element={<PressDetails />} />
        <Route path="/work-with-jo" element={<WorkWithJoPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/details/:id" element={<BlogDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/book" element={<Book />} />
        <Route path="/book-details" element={<BookDetails />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <ScrollToTopButton />
    </div>
  );
}

export default App;
