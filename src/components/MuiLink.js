import { Link, Stack, Typography } from "@mui/material";

function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" color="secondary">
        diffColor
      </Link>
      <Link href="#">Link</Link>
      <Link href="#" underline="hover">
        underlineOnHover
      </Link>
      <Typography variant="h4">
        <Link href="#" color="error">
          Link
        </Link>
      </Typography>
      <Link variant="body2" href="#">
        Linkbody2
      </Link>
    </Stack>
  );
}

export default MuiLink;
