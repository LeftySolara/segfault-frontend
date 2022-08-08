import { createStyles } from "@mantine/core";

const useHeaderStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderBottom: `2px solid ${theme.colors["cool-grey"][1]}`,
  },
  title: {
    marginLeft: "24px",
    fontSize: "48px",
    fontWeight: "bold",
    color: theme.colors["cool-grey"][6],
  },
  "link-group": {
    marginRight: "24px",
  },
  link: {
    color: theme.colors["cool-grey"][6],
    fontWeight: "bold",
  },
}));

export default useHeaderStyles;
