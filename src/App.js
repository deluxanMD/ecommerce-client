import React from "react";

import { useSelector } from "react-redux";

const App = () => {
  const auth = useSelector((state) => state.auth);

  return (
    <div>
      <p>App JS</p>
      <p>{auth.isAuthenticated.toString()}</p>
    </div>
  );
};

export default App;
