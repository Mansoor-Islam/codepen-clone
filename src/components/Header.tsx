import { FC } from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Logo } from "../icons/logo";

const Header: FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#060606", height: "9vh" }}
    >
      <Toolbar>
        <Logo fontSize="large" />
        <Typography variant="h6" sx={{ fontWeight: 700, ml: 1 }}>
          Codepen
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
