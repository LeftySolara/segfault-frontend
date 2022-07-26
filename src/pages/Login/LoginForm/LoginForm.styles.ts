import { createStyles } from "@mantine/core";

const useFormStyles = createStyles((theme) => ({
  "form-container": {
    position: "relative",
    width: "640px",
    height: "480px",
    maxWidth: "640px",
    maxHeight: "768px",
    backgroundColor: "white",
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: `10px 10px 20px ${theme.colors["cool-grey"][3]}`,
    borderRadius: "20px",
  },
  form: {
    width: "396px",
    fontSize: "20px",
  },
  button: {
    width: "128px",
    height: "55px",
    color: theme.colors.purple[0],
    backgroundColor: theme.colors.purple[4],
    borderRadius: 50,
    "&:hover": {
      backgroundColor: theme.colors.purple[4],
    },
  },
  link: {
    textDecoration: "none",
    fontFamily: "soleil",
    color: theme.colors.purple[4],
  },
  "text-input": {
    width: "100%",
    height: "64px",
    marginBottom: "48px",
    color: theme.colors["cool-grey"][6],
    backgroundColor: theme.colors["cool-grey"][0],
    border: "none",
    borderRadius: "10px",
    boxShadow: `3px 3px 5px ${theme.colors["cool-grey"][2]}`,
  },
  label: {
    fontFamily: "soleil",
    fontSize: "20px",
    color: theme.colors.purple[4],
  },
  asterisk: {
    display: "none",
  },
  error: {
    position: "absolute",
    padding: "0px 0px 20px 0px",
    translate: "0px 210px",
    color: theme.colors.red[4],
    zIndex: 2,
  },
}));

export default useFormStyles;
