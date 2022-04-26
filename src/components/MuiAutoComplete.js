import { Autocomplete, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

const skills = ["HTML", "CSS", "JS", "TypeScript", "React"];

//more practical of AutoComplete Component  in real life
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

function MuiAutoComplete() {
  const [value, setValue] = useState(null);
  const [skill, setSkill] = useState(null);

  console.log({ value });
  console.log({ skill });
  return (
    <Stack spacing={2} width="350px">
      <Autocomplete
        options={skills}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        freeSolo
        renderInput={(params) => (
          <TextField
            {...params}
            label="skills"
            helperText="start typing, it will autocomplete"
          />
        )}
      />

      {/*Example with an array of objects */}
      <Autocomplete
        options={skillsOptions}
        value={skill}
        onChange={(e, newValue) => setSkill(newValue)}
        freeSolo
        renderInput={(params) => <TextField {...params} label="skill" />}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
