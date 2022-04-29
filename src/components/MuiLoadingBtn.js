import { LoadingButton } from "@mui/lab";
import { Stack } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

function MuiLoadingBtn() {
  return (
    <Stack spacing={2} direction="row">
      <LoadingButton variant="outlined">Submit</LoadingButton>
      <LoadingButton variant="outlined" loading>
        Submit
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="Loading..." loading>
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
      >
        Save
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loadingPosition="start"
        startIcon={<SaveIcon />}
        loading
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

export default MuiLoadingBtn;

//Loading Button behaves very similar to the regular button component. However the loading button makes it easy to show a loading state with the help of the 'loading' prop. When 'loading' id true the Loading button actives.
