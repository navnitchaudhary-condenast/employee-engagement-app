import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import axios from "../../axios";

export default function GuessThePicture(props) {
  const [selection, setSelection] = useState("");
  const saveResponse = async () => {
    await axios.post("/", {option: selection});
  }

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia component="img" image={props.activity.image} alt="Profile" />
      <CardContent>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            {props.activity.activityName}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setSelection(e.target.value)}
          >
            {props.activity.options.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={!selection} onClick={saveResponse}>Submit</Button>
      </CardActions>
    </Card>
  );
}
