import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

const Copyright = (props) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      Copyright © Jiffy {new Date().getFullYear()}.
    </Typography>
  );
};

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Got an idea for an engagement activity?
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Don't hesitate to{" "}
        <Link color="inherit" href="mailto:support@jiffy.com">
          email us
        </Link>
        .
      </Typography>
      <Copyright />
    </Box>
  );
};

export default Footer;
