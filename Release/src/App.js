import React from "react";
import logo from "./logo.svg";
import Home from "./pages/Home";
import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import Contact from "./pages/Contact";
// import Test from "./pages/Test";
import NetworkSecurity from "./pages/services/network-security";
import ApplicationSecurity from "./pages/services/application-security"
import IotSecurity from "./pages/services/iot-security";
import AdverserySimulation from "./pages/services/adversery-simulation";
import BlueTeaming from "./pages/services/blue-teaming";
import SecurityTraining from "./pages/services/security-training";
import Other from "./pages/services/other-services";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service1" element={<NetworkSecurity />} />
          <Route path="/service2" element={<ApplicationSecurity />} />
          <Route path="/service3" element={<IotSecurity />} />
          <Route path="/service4" element={<AdverserySimulation />} />
          <Route path="/service5" element={<BlueTeaming />} />
          <Route path="/service6" element={<SecurityTraining />} />
          <Route path="/service7" element={<Other />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>

  );
}

export default App;
