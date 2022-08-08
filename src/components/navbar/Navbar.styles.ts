import { createStyles } from "@mantine/core";

const useNavbarStyles = createStyles((theme) => ({
  navbar: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 0,
    padding: 0,
    width: "100%",
    height: "102px",
    backgroundColor: theme.colors.purple[3],
    borderBottom: `2px solid ${theme.colors["cool-grey"][5]}`,
  },
  "title-link": {
    marginLeft: "24px",
    padding: 0,
    color: theme.colors.purple[0],
    fontSize: "48px",
    fontWeight: "bold",
    textDecoration: "none",
  },
}));

export default useNavbarStyles;
