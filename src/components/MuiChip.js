import { Avatar, Chip, Stack } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import { useState } from "react";

function MuiChip() {
  const [chips, setChips] = useState(["chip 1", "chip 2", "chip 3"]);

  const handleDelete = (chipToDelete) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    <Stack spacing={2}>
      <Stack spacing={1} direction="row">
        <Chip label="Chip" color="primary" size="small" />
        <Chip
          label="Chip outlined"
          color="secondary"
          size="small"
          variant="outlined"
        />
        <Chip
          label="Chip with Avatar"
          color="secondary"
          size="small"
          variant="outlined"
          avatar={<Avatar>V</Avatar>}
        />
        <Chip
          label="Chip with Avatar"
          color="info"
          size="small"
          icon={<FaceIcon />}
          style={{ backgroundColor: "#bae8c6" }}
        />
        <Chip
          label="Click"
          color="success"
          onClick={() => alert("Chip is clicked!")}
          size="small"
        />
        <Chip
          label="Delete"
          color="error"
          onDelete={() => alert("Delete handler called!")}
        />
      </Stack>
      <Stack spacing={1} direction="row">
        {chips.map((chip) => (
          <Chip label={chip} key={chip} onDelete={() => handleDelete(chip)} />
        ))}
      </Stack>
    </Stack>
  );
}

export default MuiChip;
