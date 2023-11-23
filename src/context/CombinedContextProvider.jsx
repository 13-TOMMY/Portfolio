import ThemeContextProvider from "./ThemeContext";
import LangContextProvider from "./LangContext.jsx";

export default function CombinedContextProvider({ children }) {
  return (
    <ThemeContextProvider>
      <LangContextProvider>
        {children}
      </LangContextProvider>
    </ThemeContextProvider>
  );
}