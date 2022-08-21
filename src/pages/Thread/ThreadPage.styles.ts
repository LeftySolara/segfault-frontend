import { createStyles } from "@mantine/core";

const useThreadPageStyles = createStyles((theme) => ({
  title: {
    marginBottom: "32px",
    fontFamily: "proxima-nova",
    fontSize: "36px",
    color: theme.colors["cool-grey"][6],
  },
  "bottom-container": {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  "message-text": {
    fontFamily: "proxima-nova",
    color: theme.colors["cool-grey"][6],
  },
}));

export default useThreadPageStyles;
