import { useState } from "react";
import { useSelector } from "react-redux";
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
import { userSelector } from "../../slices/user";

import axios from "../../axios";

export default function GuessThePicture(props) {
  const { user } = useSelector(userSelector);
  const [selection, setSelection] = useState("");
  const saveResponse = async () => {
    await axios.post("/v1/engagements/saveResponse", {
      engagementActivityId: props.engagementId,
      score: selection === props.activity.answerPersonName ? 20 : 10,
      guess: selection === props.activity.answerPersonName,
      guessWhoUserId: props.activity.answerPersonId,
      response: selection,
      userId: user.id,
    });
    props.refresh();
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={`${process.env.REACT_APP_API_BASE_URL}/${props.activity.questionImage}`}
        alt="Profile"
      />
      <CardContent>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            {props.activity.questionName}
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={(e) => setSelection(e.target.value)}
          >
            {props.activity.questionOptions.map((option) => (
              <FormControlLabel
                key={option}
                value={option}
                control={props.activity.response === option ? <Radio checked /> : <Radio disabled={props.activity.response} />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
      <CardActions>
        <Button size="small" disabled={!selection || props.activity.response} onClick={saveResponse}>
          Submit
        </Button>
      </CardActions>
    </Card>
  );
}
