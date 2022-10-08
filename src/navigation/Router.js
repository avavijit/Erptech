import React from "react";
import {
  HashRouter,
  Routes,
  Route
} from "react-router-dom";
import Layouts from "../pages/Layouts";
import Home from "../pages/Home";
import CmsPage from "../pages/CmsPage";
import ServicePage from "../pages/ServicePage";
import ProductPage from "../pages/ProductPage";
import PortfolioPage from "../pages/PortfolioPage";
import BlogsPage from "../pages/BlogsPage";
import ContactUs from "../pages/ContactUs";

function Routers() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/page/:name" element={<CmsPage />} />
          <Route path="/service/:name" element={<ServicePage />} />
          <Route path="/product/:name" element={<ProductPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default Routers