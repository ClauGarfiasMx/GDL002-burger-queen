import React from "react";

const FirebaseContext = React.createContext(null);

export default FirebaseContext;

// const FirebaseContext = React.createContext(null); ---> createContext() crea 2 componentes:
// 1. FirebaseContext.Provider: proveerá UNA INSTANCIA SOLO UNA VEZ de Firebase
//     en el nivel más alto del árbol de componentes (ver src/index.js)
// 2. FirebaseContext.Consumer trae la instancia de Firebase creada en el
//     componente que la necesita
