import { createStyles } from "@mantine/core";

const useNewThreadFormStyles = createStyles((theme) => ({
  form: {
    marginTop: "32px",
    padding: "32px",
    backgroundColor: theme.colors["cool-grey"][1],
  },
  "text-input": {
    margin: "0px 0px 24px 0px",
  },
  "inner-input": {
    fontFamily: "proxima-nova",
  },
  label: {
    marginBottom: "12px",
    fontFamily: "proxima-nova",
    fontSize: "24px",
    color: theme.colors.purple[4],
  },
  asterisk: {
    display: "none",
  },
  rte: {
    height: "512px",
    fontFamily: "proxima-nova",
  },
  "submit-button": {
    marginTop: "24px",
  },
  "cancel-button": {
    marginLeft: "24px",
  },
}));

export default useNewThreadFormStyles;
