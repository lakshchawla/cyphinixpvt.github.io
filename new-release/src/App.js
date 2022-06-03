//Dependancies
import React, { useEffect, Fragment } from "react";
import logo from "./logo.svg";

//Components
import Header from "./pages/Components/Header";
import Footer from "./pages/Components/Footer";

//Links
import Home from "./pages/Home";

//Contact
import Contact from "./pages/Contact/Contact";
import ContactSales from "./pages/Contact/ContactSales";

//Services
import NetworkSecurity from "./pages/Services/network-security";
import ApplicationSecurity from "./pages/Services/application-security";
import IotSecurity from "./pages/Services/iot-security";
import AdverserySimulation from "./pages/Services/adversery-simulation";
import BlueTeaming from "./pages/Services/blue-teaming";
import SecurityTraining from "./pages/Services/security-training";
import Other from "./pages/Services/other-services";
import Services from "./pages/Services/services";

//Blogs
import Blogs from "./pages/Blogs/Blogs";
import Jammers from "./pages/Blogs/Jammers"

//Functions
import ScrollToTop from "./pages/Functions/ScrollToTop";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <ScrollToTop />
        <div className="m-0 p-0">
          <Header />
          <div className="fillMargin m-0 p-0" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/application-security-assessment" element={<ApplicationSecurity />} />
            <Route path="/blue-teaming-solutions" element={<BlueTeaming />} />
            <Route path="/iot-security-assessment" element={<IotSecurity />} />
            <Route path="/network-security-assessment" element={<NetworkSecurity />} />
            <Route path="/adversery-simulation" element={<AdverserySimulation />} />
            <Route path="/security-training-and-awareness" element={<SecurityTraining />} />
            <Route path="/other-security-services" element={<Other />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-sales" element={<ContactSales />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs-how-hackers-can-jam-cell-phone-signals" element={<Jammers />} />

          </Routes>
        </div>
        <Footer />
      </Fragment>
    </BrowserRouter>
  );
}

export default App;
