import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
} from "@material-ui/core";
import React from "react";
import { Link as RouterLink } from "react-router-dom";


  const headersData = [
   
  ];
                     
const useStyles = makeStyles(() => ({

  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
 

}));
                     
export default function Header() {
  const { header, logo } = useStyles();
                     
  const displayDesktop = () => {
    return (
      <Toolbar>
        {femmecubatorLogo}
        {getMenuButtons()}
      </Toolbar>
    );
  };
                     
  const femmecubatorLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      Ecom
    </Typography>
  );
                     
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
          }}
        >
          {label}
        </Button>
      );
    });
  };
                     
  return (
    <header>
      <AppBar className={header}>{displayDesktop()}</AppBar>
    </header>
  );
}