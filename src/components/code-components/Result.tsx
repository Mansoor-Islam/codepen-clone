import { Box } from "@mui/material";
import { FC, useState, useEffect, useContext } from "react";

import { DataContext } from "../../context/DataProvider";

const Result: FC = () => {
  const [srcCode, setSrcCode] = useState("");

  const { html, css, javascript } = useContext(DataContext);

  const src = `
    <html>
      <body>${html}</body>
      <style>${css}</style>
      <script>${javascript}</script>
    </html>
  `;

  useEffect(() => {
    setTimeout(() => {
      setSrcCode(src);
    }, 1000);
  }, [html, css, javascript]);

  return (
    <>
      <Box
        style={
          html || css || javascript ? null : { backgroundColor: "#444857" }
        }
        sx={{ height: "41vh" }}
      >
        <iframe
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
          srcDoc={srcCode}
        />
      </Box>
    </>
  );
};

export default Result;
