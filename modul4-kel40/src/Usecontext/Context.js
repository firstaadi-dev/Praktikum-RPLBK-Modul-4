import { useContext, createContext, useState } from "react";
import "./Context.css";

const themes = {
  light: {
    text: "rgb(97, 218, 215)",
    backgroud: "#DEE4E7",
  },
  dark: {
    text: "#DEE4E7",
    background: "rgb(40, 44, 52)",
  },
};

const ThemeContext = createContext();

export default function Context() {
  const [valueTheme, setValueTheme] = useState(themes.dark);

  return (
    <ThemeContext.Provider value={valueTheme}>
      <div className="contentWrapper" style={{ backgroundColor: valueTheme.backgroud}}>
        <Content />
        <button
          className="Button"
          onClick={() => setValueTheme( valueTheme === themes.light ? themes.dark : themes.light)}
        >
          change
        </button>
      </div>
    </ThemeContext.Provider>
  );
}

function Content(props) {
  return (
    <div>
      <Text />
    </div>
  );
}

function Text(props) {
  const theme = useContext(ThemeContext);
  console.log("[context value]", theme);
  console.log(theme.text)
  return <p className="titleContext">context value {theme.text}</p>;
}
