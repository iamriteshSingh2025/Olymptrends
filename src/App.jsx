import React from "react";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import Footer from "./components/layouts/Footer";

function App() {
  return (
    <MainLayout>
      <Home />
      <Footer/>
    </MainLayout>
  );
}

export default App;
