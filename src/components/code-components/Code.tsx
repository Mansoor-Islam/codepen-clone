import { Box, Typography, styled } from "@mui/material";
import Editor from "./Editor";
import { HTMLIcon } from "../../icons/html-icon";
import { CSSIcon } from "../../icons/css-icon";
import { JSIcon } from "../../icons/js-icon";
import { useContext } from "react";

import { DataContext } from "../../context/DataProvider";

const Container = styled(Box)`
  background-color: #060606;
  height: 50vh;
  display: flex;
`;

const Code = () => {
  const { html, setHtml, css, setCss, javascript, setJavascript } =
    useContext(DataContext);
  return (
    <Container>
      <Editor
        editorFavicon={<HTMLIcon fontSize="small" sx={{ mx: 1, my: 0.5 }} />}
        title="HTML"
        language="xml"
        value={html}
        onChange={setHtml}
      />
      <Editor
        editorFavicon={<CSSIcon fontSize="small" sx={{ mx: 1, my: 0.5 }} />}
        title="CSS"
        language="css"
        value={css}
        onChange={setCss}
      />
      <Editor
        editorFavicon={<JSIcon fontSize="small" sx={{ mx: 1, my: 0.5 }} />}
        title="JS"
        language="javascript"
        value={javascript}
        onChange={setJavascript}
      />
    </Container>
  );
};

export default Code;
