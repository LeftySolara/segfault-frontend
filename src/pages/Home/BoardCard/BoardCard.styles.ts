import { createStyles } from "@mantine/core";

const useBoardCardStyles = createStyles((theme) => ({
  "board-card": {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    marginBottom: "24px",
    backgroundColor: "#ffffff",
    boxShadow: `0px 5px 0px ${theme.colors["cool-grey"][1]}`,
  },
  "board-title": {
    fontFamily: "soleil",
    fontSize: "30px",
    fontWeight: "bold",
    color: theme.colors["cool-grey"][7],
  },
  "board-description": {
    fontFamily: "soleil",
    fontSize: "30px",
    color: theme.colors["cool-grey"][5],
  },
  "board-title-group": {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
  },
  "board-thread-group": {
    display: "flex",
    flexFlow: "column nowrap",
    alignItems: "center",
  },
}));

export default useBoardCardStyles;
