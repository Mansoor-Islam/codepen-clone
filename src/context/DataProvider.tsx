import { FC, createContext, useState } from "react";

export const DataContext = createContext(null);

const DataProvider: FC<{}> = ({ children }) => {
  const [html, setHtml] = useState<any>("");
  const [css, setCss] = useState<any>("");
  const [javascript, setJavascript] = useState<any>("");

  return (
    <DataContext.Provider
      value={{ html, setHtml, css, setCss, javascript, setJavascript }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
