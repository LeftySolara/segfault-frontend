import { createStyles } from "@mantine/core";

const useBoardPageStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-between",
  },
  anchor: {
    fontFamily: "soleil",
    fontSize: "24px",
    color: theme.colors["cool-grey"][5],
    marginBottom: "30px",
  },
}));

export default useBoardPageStyles;
