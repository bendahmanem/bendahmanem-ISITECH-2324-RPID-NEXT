import React, { createContext, useEffect, useReducer } from "react";

const AuthContext = createContext({
  state: { isLoggedIn: false },
  dispatch: (action) => {},
});

const authReducer = (state, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      return { isLoggedIn: true };
    case "ON_LOGOUT":
      return { isLoggedIn: false };
    default:
      return state;
  }
};
// TODO : prevoir un reducer pour le state avec les actions ON_LOGIN et ON_LOGOUT

export const AuthContextProvider = (props) => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [state, dispatch] = useReducer(authReducer, { isLoggedIn: false });

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");

    if (storedUserLoggedInInformation === "1") {
      dispatch({ type: "ON_LOGIN" });
    }
  }, []);

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };

  // const loginHandler = (email, password) => {
  //   // TODO: Add login logic here
  //   localStorage.setItem("isLoggedIn", "1");
  //   setIsLoggedIn(true);
  // };

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

/* 
<AuthContextProvider>

</AuthContext>

*/
