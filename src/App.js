import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "./components/Utils/languageContext";
import Home from "./pages/Home";
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";
import ScrollToTop from "./components/Utils/ScollToTop";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Portfolio from "./pages/Portfolio";
import ContactUs from "./pages/ContactUs";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import TermsCondition from "./pages/TermsCondition";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import CopyrightPolicy from "./pages/CopyrightPolicy";
import Error from "./pages/Error";
import NavbarMobile from "./components/Layout/NavbarMobile";

const Layout = ({ children }) => {
  const { lang } = useParams();
  

  return (
    <div className={`text-center bg-[#F4F4F4]`}>
      <Navbar lang={lang} />
      <NavbarMobile lang={lang} />
      {children}
      <Footer lang={lang} />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/en" />} />
          <Route path="/:lang" element={<Layout><Home /></Layout>} />
          <Route path="/:lang/AboutUs" element={<Layout><AboutUs /></Layout>} />
          <Route path="/:lang/Services" element={<Layout><Services /></Layout>} />
          <Route path="/:lang/Products" element={<Layout><Products /></Layout>} />
          <Route path="/:lang/Portfolio" element={<Layout><Portfolio /></Layout>} />
          <Route path="/:lang/ContactUs" element={<Layout><ContactUs /></Layout>} />
          <Route path="/:lang/Careers" element={<Layout><Careers /></Layout>} />
          <Route path="/:lang/Blogs" element={<Layout><Blogs /></Layout>} />
          <Route path="/:lang/Blogpost" element={<Layout><BlogPost /></Layout>} />
          <Route path="/:lang/TermsCondition" element={<Layout><TermsCondition /></Layout>} />
          <Route path="/:lang/PrivacyPolicy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/:lang/CookiePolicy" element={<Layout><CookiePolicy /></Layout>} />
          <Route path="/:lang/CopyrightPolicy" element={<Layout><CopyrightPolicy /></Layout>} />
          <Route path="*" element={<Layout><Error /></Layout> }/>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
