import { Avatar, AvatarGroup, Stack } from "@mui/material";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>ZH</Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>AH</Avatar>
      </Stack>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="gild"
          />
          <Avatar
            src="https://randomuser.me/api/portraits/men/55.jpg"
            alt="boy"
          />
          <Avatar sx={{ bgcolor: "primary.light" }}>ZH</Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>AH</Avatar>
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          variant="square"
          sx={{ bgcolor: "primary.light", width: 48, height: 48 }}
        >
          ZH
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          AH
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
