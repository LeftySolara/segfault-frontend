import { createStyles } from "@mantine/core";

const usePostEditorStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "flex-start",
    width: "100%",
    padding: "24px",
    backgroundColor: theme.colors["cool-grey"][1],
  },
  "header-text": {
    fontFamily: "proxima-nova",
    fontSize: "30px",
    color: theme.colors["cool-grey"][7],
    padding: 0,
  },
  editor: {
    marginTop: "16px",
  },
  "submit-button": {
    width: "96px",
    marginTop: "16px",
  },
}));

export default usePostEditorStyles;
