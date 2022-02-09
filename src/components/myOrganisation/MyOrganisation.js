import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import axios from "../../axios";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  // border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const MyOrganisation = () => {
  const [showModal, setShowModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(async () => {
    await axios
      .get("/v1/users")
      .then((resp) => {
        setUserList(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const showUserModal = async (id) => {
    await axios
      .get("/v1/users/" + id)
      .then((resp) => {
        setUserData(resp.data);
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const renderModal = () => {
    return (
      <div>
        <Modal
          open={showModal}
          onClose={() => setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
          <Typography gutterBottom variant="h5" component="h2">
                    {userData.name}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h6">
                    {userData.about}
                  </Typography>
            <div
              key={userData.id}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
              }}
            >
              {/* <Card
            sx={{
              height: "100%",
              width:"100%",
              display: "flex",
              flexDirection: "column",
            }}
          > */}
              <div>
                <CardMedia
                  component="img"
                  sx={{
                    width: "240px",
                    height:"300px"
                  }}
                  image={`${process.env.REACT_APP_API_BASE_URL}/${userData.picture}`}
                  alt="random"
                />
              </div>
              {/* <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "row",
                  width: "100%",
                }}
              > */}
                <CardContent sx={{ flexGrow: 1, display: "flex",
                    flexDirection: "row", marginLeft:"30px" }}>
                 
                  <div>
                    <Typography gutterBottom variant="h5" component="h3">
                      Personla Details
                    </Typography>
                    <Typography>Email: {userData.email}</Typography>
                    <Typography>DOB: {userData.dob}</Typography>
                    <Typography>Mobile No: {userData.mobile}</Typography>
                    <Typography>City: {userData.address.city}</Typography>
                    <Typography>State: {userData.address.state}</Typography>
                    <Typography>Country: {userData.address.country}</Typography>
                    <Typography>Interests:</Typography>
                    <Typography>Food: {userData.interests["food"]}</Typography>
                    <Typography>
                      {" "}
                      Music: {userData.interests["music"]}
                    </Typography>
                    <Typography>
                      Sports: {userData.interests["sports"]}
                    </Typography>
                    <Typography>
                      Books: {userData.interests["books"]}
                    </Typography>
                  </div>
                 
                  <div style={{marginLeft:"30px"}}>
                  <Typography gutterBottom variant="h5" component="h3">
                      Other Details
                    </Typography>
                    <Typography>CN Office: {userData.office.name}</Typography>
                    <Typography>CN Team: {userData.office.team}</Typography>
                    <Typography>Role: {userData.office.role}</Typography>
                    <Typography>Skills: {userData.office.skills}</Typography>
                    {/* <Typography gutterBottom variant="h5" component="h3">
                      Social Links
                    </Typography> */}
                    <Typography>
                      LinkdIn: {userData.social["linkedin"]}
                    </Typography>
                    <Typography>
                      Facebook: {userData.social["facebook"]}
                    </Typography>
                    <Typography>
                      Instagram: {userData.social["instagram"]}
                    </Typography>
                    <Typography>
                      Twitter: {userData.social["twitter"]}
                    </Typography>
                    <Typography>
                      SnapChat: {userData.social["snapchat"]}
                    </Typography>
                    <Typography>
                      StackOverflow: {userData.social["stackoverflow"]}
                    </Typography>
                  </div>
                  {/* <Typography>Email: {userData.address.city}</Typography>
              <Typography>Email: {userData.address.city}</Typography> */}
                </CardContent>
              {/* </div> */}
              {/* </Card> */}
            </div>
          </Box>
        </Modal>
      </div>
    );
  };

  return (
    <Grid container spacing={4}>
      {userList.map((user) => (
        <Grid item key={user.id} xs={12} sm={6} md={4}>
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                pt: "1%",
              }}
              image={`${process.env.REACT_APP_API_BASE_URL}/${user.picture}`}
              alt="random"
            />
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography gutterBottom variant="h5" component="h2">
                {user.name}
              </Typography>
              <Typography>{user.email}</Typography>
            </CardContent>
            <CardActions>
              <Grid container justifyContent="center">
                <Grid item>
                  <Button size="small" onClick={() => showUserModal(user.id)}>
                    View
                  </Button>
                </Grid>
              </Grid>
              {/* <Button size="small">Edit</Button> */}
            </CardActions>
          </Card>
        </Grid>
      ))}
      {showModal && userData && renderModal()}
    </Grid>
  );
};

export default MyOrganisation;
