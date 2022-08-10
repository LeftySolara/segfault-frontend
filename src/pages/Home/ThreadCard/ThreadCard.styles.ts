import { createStyles } from "@mantine/core";

const useThreadCardStyles = createStyles((theme) => ({
  "thread-card": {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-between",
    marginBottom: "24px",
    height: "192px",
    backgroundColor: "#ffffff",
    boxShadow: `0px 5px 0px ${theme.colors["cool-grey"][1]}`,
  },
  "thread-title": {
    fontFamily: "soleil",
    fontSize: "30px",
    fontWeight: "bold",
    color: theme.colors["cool-grey"][7],
  },
  "secondary-text": {
    fontFamily: "soleil",
    color: theme.colors["cool-grey"][5],
  },
  author: {
    fontFamily: "soleil",
    color: theme.colors.purple[3],
  },
}));

export default useThreadCardStyles;
