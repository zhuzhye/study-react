import React, { memo, useContext } from "react";
import { UserContext, ThemeContext } from "./context";
const App = memo(() => {
  // 使用context
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);
  return (
    <div>
      <h2>
        user:{user.name}-{user.level}
      </h2>
      <h2>
        the:{theme.color} - {theme.size}
      </h2>
    </div>
  );
});

export default App;
