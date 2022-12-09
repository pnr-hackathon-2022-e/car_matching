import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useCallback, useContext } from "react";
import Cloud1 from "../assets/matching/cloud1.png";
import Cloud2 from "../assets/matching/cloud2.png";
import Cloud3 from "../assets/matching/cloud3.png";
import RoadSign from "../assets/matching/road_sign.png";
import Road from "../assets/matching/road.png";
import NextButton from "../assets/matching/next_button.png";
import EndButton from "../assets/matching/end_button.png";
import AddFriendButton from "../assets/matching/add_friend_button.png";
import { userContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const Matching = () => {
  const user = useContext(userContext);
  const navigate = useNavigate();

  const handleClickNext = useCallback(() => {}, []);

  const handleClickEnd = useCallback(() => {
    navigate("/");
  }, []);
  return (
    <Container
      maxWidth="xs"
      sx={{
        px: 0,
        position: "relative",
        overflow: "hidden",
        bgcolor: "#30dcec",
        height: "100vh",
        width: "100%",
      }}
    >
      <img
        src={Cloud1}
        style={{
          position: "absolute",
          top: 0,
          left: -100,
          width: 300,
        }}
      />
      <img
        src={Cloud3}
        style={{
          position: "absolute",
          top: 0,
          left: 200,
          width: 300,
        }}
      />
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ position: "relative", pt: 20 }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          // spacing={-2}
          sx={{
            width: "65%",
            mx: "auto",
            zIndex: 1,
          }}
        >
          <Box flex={3}>
            <Avatar sx={{ width: 50, height: 50 }}>{user?.name[0]}</Avatar>
          </Box>
          <Box flex={6}>
            <Typography variant="h6" color="white" fontWeight="extra-bold">
              {user?.name}
            </Typography>
          </Box>
          <Box flex={3}>
            <img
              src={AddFriendButton}
              style={{
                width: "90%",
              }}
            />
          </Box>
        </Stack>
        <img
          src={RoadSign}
          style={{
            position: "absolute",
            width: "100%",
          }}
        />
      </Stack>
      <Stack direction="row" pt={10}>
        <img
          src={NextButton}
          style={{
            width: "50%",
          }}
          onClick={handleClickNext}
        />
        <img
          src={EndButton}
          style={{
            width: "50%",
          }}
          onClick={handleClickEnd}
        />
      </Stack>
      <img
        src={Cloud2}
        style={{
          position: "absolute",
          bottom: 50,
          right: -50,
          width: 300,
        }}
      />

      <img
        src={Road}
        style={{
          width: "100%",
          position: "fixed",
          bottom: 0,
          left: 0,
        }}
      />
    </Container>
  );
};
