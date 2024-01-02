/* eslint-disable react/jsx-no-target-blank */
import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile/Profile";
import PropsExample from "./components/PropsExample/PropsExample";

// En react tous les composants sont des fonctions*
// Tout composant doit retourner un élément JSX
function App() {
  // React nous permet de mettre a jour le DOM avec
  // des outils appeles hooks

  // Ce sont des fonctions qui commencent par use (convention)
  const [name, setName] = useState("React");

  function onClickHandler(test) {
    setName("Vite");
    console.log("je proviens du composant enfant: ", test);

    // On peut aussi utiliser une fonction pour mettre a jour le state
    // Cette syntaxe est utile quand on veut mettre un state dont
    // la valeur depend de la valeur precedente
    setName((prev) => {
      return prev + "Vite";
    });
  }

  return (
    <>
      <h1>Vite + React</h1>

      <Profile />

      <PropsExample name={name} childClickHandler={onClickHandler} />
    </>
  );
}

export default App;
