import React, { useState } from "react";
import { Dropdown } from "./components/Dropdown";
export const App = () => {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const items = [
    {
      id: "1fasd",
      label: "Can I use React on a project?",
      content:
        "React te ayuda a crear interfaces de usuario interactivas de forma sencilla. Diseña vistas simples para cada estado en tu aplicación, y React se encargará ...",
    },
    {
      id: "1fasdaa",
      label: "Can I use Javascript on a project?",
      content:
        "JavaScript (JS) es un lenguaje de programación ligero, interpretado, o compilado justo-a-tiempo (just-in-time) con funciones de primera clase.",
    },
    {
      id: "1fasdbb",
      label: "Can I use CSS on a project?",
      content:
        " Hojas de Estilo en Cascada (del inglés Cascading Style Sheets) o CSS es el lenguaje de estilos utilizado para describir la presentación de ..",
    },
  ];

  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
};
