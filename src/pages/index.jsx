import { Route, Routes } from "react-router-dom";
import Home from "./home/Home";
import About from "./about/About";
import Work from "./work/Work";
import Pricing from "./pricing/Pricing";
import Blog from "./blog/Blog";
import Contact from "./contact/Contact";
import NotFound from "./NotFound/NotFound";

const MainRouters = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Work />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default MainRouters;
