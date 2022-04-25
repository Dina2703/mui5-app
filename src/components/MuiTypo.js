import { Typography } from "@mui/material";

function MuiTypo() {
  return (
    <div>
      <Typography variant="h1" gutterBottom>
        hello
      </Typography>
      <Typography variant="h2">hello</Typography>
      <Typography variant="h3">hello</Typography>
      <Typography variant="h4" component="h6" gutterBottom>
        hello 4
      </Typography>
      <Typography variant="h5">hello</Typography>
      <Typography variant="h6">hello</Typography>

      <Typography variant="subtitle1">hello</Typography>
      <Typography variant="subtitle2">hello</Typography>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita fugit
        minima animi perspiciatis blanditiis nihil inventore, illo maxime
        officiis asperiores, exercitationem molestiae commodi! Delectus sapiente
        voluptatum nobis facilis dolores quos!
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
        repellendus deleniti corrupti sapiente, consectetur cupiditate, atque
        quis quas dolor illo laudantium doloremque unde saepe minus architecto
        nesciunt eveniet. Consequatur, deleniti.
      </Typography>
    </div>
  );
}

export default MuiTypo;
