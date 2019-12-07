import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [querry, setQuerry] = useState("");

  return (
    <div>
      <Header />
      <Main querry={querry} setQuerry={setQuerry} />
    </div>
  );
}

export default App;
