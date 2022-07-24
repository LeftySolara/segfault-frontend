import { createStyles } from "@mantine/core";

const usePageStyles = createStyles((theme) => ({
  container: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
  },
  heading: {
    color: theme.colors["cool-grey"][7],
    fontWeight: 500,
  },
}));

export default usePageStyles;
