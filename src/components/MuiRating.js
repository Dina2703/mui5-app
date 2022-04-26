import { Rating, Stack } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

function MuiRating() {
  const [rateValue, setRateValue] = useState(null);
  console.log({ rateValue });
  const handleChange = (e, newValue) => {
    setRateValue(newValue);
  };

  return (
    <>
      <Stack spacing={2}>
        <Rating value={rateValue} onChange={handleChange} size="large" />

        <Rating value={rateValue} onChange={handleChange} precision={0.5} />

        <Rating
          value={rateValue}
          onChange={handleChange}
          precision={0.5}
          icon={<FavoriteIcon color="error" fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        />

        <Rating
          value={3}
          onChange={handleChange}
          icon={<FavoriteIcon color="error" fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          readOnly
        />
        <Rating
          value={4}
          onChange={handleChange}
          icon={<FavoriteIcon color="error" fontSize="inherit" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly
        />
        <Rating
          name="highlight-selected-only"
          defaultValue={3}
          IconContainerComponent={IconContainer}
          highlightSelectedOnly
        />
      </Stack>
    </>
  );
}

export default MuiRating;
