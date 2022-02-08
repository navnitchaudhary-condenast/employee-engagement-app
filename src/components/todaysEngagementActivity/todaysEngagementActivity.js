import Container from "@mui/material/Container";

import GuessThePicture from "../guessThePicture/GuessThePicture";

const TodaysEngagementActivity = () => {
  const data = [
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      activityName: "Guess who the picture is ?",
      options: ["Akshat", "Navnit", "Ankit", "Joe"],
    },
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      activityName: "Guess who the picture is ?",
      options: ["Akshat", "Navnit", "Ankit", "Joe"],
    },
    {
      image: "https://mui.com/static/images/cards/contemplative-reptile.jpg",
      activityName: "Guess who the picture is ?",
      options: ["Akshat", "Navnit", "Ankit", "Joe"],
    },
  ];

  return (
    <Container>
      {" "}
      {data.map((item) => {
        return <GuessThePicture activity={item} />;
      })}
    </Container>
  );
};

export default TodaysEngagementActivity;
