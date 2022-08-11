import { createStyles } from "@mantine/core";

const useRecentThreadsStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "640px",
    marginLeft: "128px",
  },
  title: {
    marginBottom: "24px",
    padding: 0,
    fontFamily: "soleil",
    color: theme.colors.purple[7],
  },
}));

export default useRecentThreadsStyles;
