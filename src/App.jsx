// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { lazy, Suspense } from "react";
// import BrProducts from "../pages/BrProducts.jsx";

// // ✅ Code-split routes (lazy load pages so they're only loaded when needed)
// const Home = lazy(() => import("../pages/Home.jsx"));
// const WaveSection = lazy(() => import("./components/about_us/hero.jsx"));
// const PerfumeList = lazy(() => import("../pages/PerfumeList.jsx"));
// const SendelList = lazy(() => import("../pages/SendelList.jsx"));
// const DetergentsList = lazy(() => import("../pages/DetergentsList.jsx"));
// const CareList = lazy(() => import("../pages/CareList.jsx"));
// const ProductPage = lazy(() => import("../pages/ProdouctDetails.jsx"));
// const OthersList = lazy(() => import("../pages/OthersList.jsx"));
// const ContactPage = lazy(() => import("../pages/Contact.jsx"));
// const ServicesPage = lazy(() => import("../pages/ServicesPage.jsx"));

// // ✅ Simple loading fallback (doesn't affect styles)
// const Loading = () => <div role="status" aria-live="polite">Loading...</div>;

// const App = () => {
//   return (
//     <Router>
//       {/* Suspense wraps all lazy-loaded routes */}
//       <Suspense fallback={<Loading />}>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/home" element={<Home />} />
//           <Route path="/about" element={<WaveSection />} />
//           <Route path="/perfumes" element={<PerfumeList />} />
//           <Route path="/sendels" element={<SendelList />} />
//           <Route path="/detergents" element={<DetergentsList />} />
//           <Route path="/care" element={<CareList />} />
//           <Route path="/product" element={<ProductPage />} />
//           <Route path="/others" element={<OthersList />} />
//           <Route path="/brproducts" element={<BrProducts />} />

//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/services" element={<ServicesPage />} />
//         </Routes>
//       </Suspense>
//     </Router>
//   );
// };

// export default App;
// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Home from "/pages/Home.jsx";
import WaveSection from "../src/components/about_us/hero.jsx";
import PerfumeList from "/pages/PerfumeList.jsx";
import SendelList from "/pages/SendelList.jsx";
import DetergentsList from "/pages/DetergentsList.jsx";
import CareList from "/pages/CareList.jsx";
import ProductPage from "/pages/ProdouctDetails.jsx";
import OthersList from "/pages/OthersList.jsx";
import ContactPage from "/pages/Contact.jsx";
import BrProducts from "/pages/BrProducts.jsx";

import './index.css'

import ServicesPage from "/pages/ServicesPage.jsx";
// pages\ServicesPage.jsx
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<WaveSection />} />
      <Route path="/perfumes" element={<PerfumeList />} />
      <Route path="/sendels" element={<SendelList />} />
      <Route path="/detergents" element={<DetergentsList />} />
      <Route path="/care" element={<CareList />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/others" element={<OthersList />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/brproducts" element={<BrProducts />} />

      <Route path="/services" element={<ServicesPage />} />
      {/* <Route path="/services" element={<ServicesPage />} /> */}

    </Routes>
  );
};

export default App;
