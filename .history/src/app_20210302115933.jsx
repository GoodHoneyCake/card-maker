import React from "react";
import "./app.css";
import Login from "./components/login/login";

function App({ authService }) {
  return (
    <div className={styles.app}>
      <Login authService={authService} />
    </div>
  );
}

export default App;
