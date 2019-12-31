import React from "react";

// Create ThemeContext, returns an Object with a Provider and a Consumer
const ThemeContext = React.createContext();

// // Wrap the App in <ThemeProvider>
// // Lower down, wrap the Chart in <ThemeContext.Consumer>
export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
