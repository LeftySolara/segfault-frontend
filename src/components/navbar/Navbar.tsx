import React from "react";
import { Link } from "react-router-dom";

import useNavbarStyles from "./Navbar.styles";

const Navbar = () => {
  const { classes } = useNavbarStyles();

  return (
    <div className={classes.navbar}>
      <Link to="/" className={classes["title-link"]}>
        Segfault
      </Link>
    </div>
  );
};

export default Navbar;
