import { IconButton, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function MuiToolTip() {
  return (
    <>
      <Tooltip title="Delete" placement="right-start" arrow>
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="left" arrow color="info">
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip
        title="Delete"
        arrow
        color="error"
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </>
  );
}

export default MuiToolTip;

//tooltips display informative text then users hover over, focus on or tap an element. Especially usefull  when working with icons
