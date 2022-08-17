import { createStyles } from "@mantine/core";

const useThreadListStyles = createStyles((theme) => ({
  "table-header": {
    fontFamily: "soleil",
    fontSize: "24px",
    fontWeight: "bold",
    color: theme.colors["cool-grey"][7],
  },
  "topic-container": {
    display: "flex",
    flexFlow: "column nowrap",
  },
  "topic-text": {
    fontFamily: "soleil",
    fontSize: "24px",
    fontWeight: "bold",
    color: theme.colors["cool-grey"][7],
  },
  "author-line": {
    fontFamily: "soleil",
    fontSize: "20px",
    color: theme.colors["cool-grey"][5],
    marginTop: "5px",
  },
  author: {
    fontFamily: "soleil",
    color: theme.colors.purple[3],
  },
  "reply-count": {
    fontFamily: "soleil",
    fontSize: "20px",
    color: theme.colors["cool-grey"][6],
  },
  "last-post": {
    fontFamily: "soleil",
    fontSize: "20px",
    color: theme.colors["cool-grey"][6],
  },
}));

export default useThreadListStyles;
