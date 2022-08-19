import { createStyles } from "@mantine/core";

const usePostDisplayStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    marginBottom: "16px",
    border: `1px solid ${theme.colors["cool-grey"][2]}`,
    boxShadow: `0px 5px 0px ${theme.colors["cool-grey"][1]}`,
  },
  header: {
    display: "flex",
    flexFlow: "row nowrap",
    backgroundColor: theme.colors["cool-grey"][1],
    padding: "10px",
    border: `1px solid ${theme.colors["cool-grey"][2]}`,
  },
  bottom: {
    display: "flex",
    flexFlow: "row nowrap",
  },
  "author-container": {
    width: "350px",
  },
  author: {
    fontFamily: "proxima-nova",
    fontSize: "24px",
    fontWeight: "bold",
  },
  "user-info-container": {
    width: "350px",
    borderRight: `1px solid ${theme.colors["cool-grey"][2]}`,
  },
  "user-info": {
    padding: "10px",
  },
  "user-info-text": {
    fontFamily: "proxima-nova",
    fontSize: "24px",
  },
  "content-container": {
    padding: "10px",
  },
  content: {
    fontFamily: "proxima-nova",
    fontSize: "24px",
  },
  timestamp: {
    fontFamily: "proxima-nova",
    fontSize: "24px",
    color: theme.colors.purple[4],
  },
}));

export default usePostDisplayStyles;
