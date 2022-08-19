import { createStyles } from "@mantine/core";

const useThreadPageStyles = createStyles((theme) => ({
  "bottom-container": {
    display: "flex",
    justifyContent: "center",
    padding: "10px",
  },
  "login-message-text": {
    fontFamily: "proxima-nova",
    color: theme.colors["cool-grey"][6],
  },
}));

export default useThreadPageStyles;
