import { createStyles } from "@mantine/core";

const useLogoutButtonStyles = createStyles((theme) => ({
  button: {
    marginRight: "24px",
    color: theme.colors["cool-grey"][6],
    fontWeight: "bold",
  },
}));

export default useLogoutButtonStyles;
