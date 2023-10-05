import React from "react";
import { SimpleRegistrationForm } from "./components/ImageUpload";
import ImageGrid from "./components/ImageGrid";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <SimpleRegistrationForm />
      <ImageGrid />
    </div>
  );
}

export default App;
