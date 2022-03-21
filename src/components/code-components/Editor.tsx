import { Box, Typography, styled, Button } from "@mui/material";
import { FC, ReactElement, useState } from "react";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";

import { Controlled } from "react-codemirror2";

let CodeMirror = null;

if (typeof window !== "undefined" && typeof window.navigator !== "undefined") {
  CodeMirror = require("codemirror/theme/material.css");
  require("codemirror/lib/codemirror.css");
  require("codemirror/mode/xml/xml");
  require("codemirror/mode/css/css");
  require("codemirror/mode/javascript/javascript");
}

interface EditorProps {
  editorFavicon: ReactElement<any, any>;
  title: string;
  language: string;
  value: any;
  onChange: any;
}

const Heading = styled(Box)`
  background: #1d1e22;
  display: flex;
  align-items: center;
  padding: 4px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background-color: #060606;
  color: #aaaebc;
`;

const Editor: FC<EditorProps> = ({
  editorFavicon,
  title,
  language,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(true);

  const handleChange = (editor: any, data: any, value: any) => {
    onChange(value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        flexGrow: open ? 1 : 0,
        flexBasic: 0,
        px: 0.5,
        pb: 0.5,
      }}
    >
      <Header>
        <Heading>
          {editorFavicon}
          <Typography sx={{ fontWeight: 700, mr: 0.7 }}>{title}</Typography>
        </Heading>

        <Button onClick={() => setOpen((prevState) => !prevState)}>
          <CloseFullscreenIcon
            fontSize="small"
            sx={{ color: "#aaaebc", alignSelf: "center", mr: 1 }}
          />
        </Button>
      </Header>

      <Controlled
        value={value}
        onBeforeChange={handleChange}
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </Box>
  );
};

export default Editor;
