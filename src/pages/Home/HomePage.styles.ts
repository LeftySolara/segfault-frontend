import { createStyles } from "@mantine/core";

const useHomePageStyles = createStyles((theme) => ({
  "content-container": {
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "space-evenly",
    width: "100%",
  },
  "board-group-container": {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-evenly",
    width: "1024px",
  },
  "recent-threads-container": {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "space-evenly",
    width: "640px",
  },
}));

export default useHomePageStyles;
