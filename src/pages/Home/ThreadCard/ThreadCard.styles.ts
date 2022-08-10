import { createStyles } from "@mantine/core";

const useThreadCardStyles = createStyles((theme) => ({
  "thread-card": {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
    marginBottom: "24px",
    backgroundColor: "#ffffff",
    boxShadow: `0px 5px 0px ${theme.colors["cool-grey"][1]}`,
  },
  "thread-title": {
    fontFamily: "soleil",
    fontSize: "30px",
    fontWeight: "bold",
    color: theme.colors["cool-grey"][7],
  },
}));

export default useThreadCardStyles;
