import { createStyles } from "@mantine/core";

const useAuthLinkStyles = createStyles((theme) => ({
  "link-group": {
    marginRight: "24px",
  },
  link: {
    color: theme.colors["cool-grey"][6],
    fontWeight: "bold",
  },
}));

export default useAuthLinkStyles;
