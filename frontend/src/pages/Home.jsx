import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useCallback, useContext, useState } from "react";
import { UserEditModal } from "../components/UserEditModal";
import { userContext } from "../contexts/UserContext";

import Car from "../assets/home/car.png";
import CarMatching from "../assets/home/car_matching.png";
import EditButton from "../assets/home/edit_button.png";
import FriendButton from "../assets/home/friend_button.png";
import Title from "../assets/home/title.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const user = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const navigate = useNavigate();

  const handleClickEditButton = useCallback(() => {
    setOpen(!open);
  }, [open]);

  const handleClickCarButton = useCallback(async () => {
    setIsMatching(!isMatching);
    setTimeout(() => {
      navigate("/matching");
    }, 2000);
  }, [isMatching]);

  const handleClickFriendButton = useCallback(() => {
    navigate("/friends");
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
      <Box sx={{ textAlign: "center", mt: 5 }}>
        <img
          src={Title}
          style={{
            width: "80%",
          }}
        />
      </Box>
      <Stack alignItems="center" sx={{ position: "fixed", bottom: 0 }}>
        <img
          src={isMatching ? CarMatching : Car}
          style={{
            width: "80%",
            marginBottom: -7,
          }}
          onClick={handleClickCarButton}
        />
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          spacing={1.5}
          sx={{
            py: 2,
            px: 1,
            bgcolor: "#2C4E5B",
          }}
        >
          <Avatar sx={{ width: 60, height: 60 }}>{user?.name[0]}</Avatar>
          <Typography variant="h6" color="white" fontWeight="bold" flex={4}>
            {user?.name}
          </Typography>
          <Stack flex={6} spacing={-3} direction="row" justifyContent="center">
            <img
              src={EditButton}
              style={{
                width: "50%",
              }}
              onClick={handleClickEditButton}
            />
            <img
              src={FriendButton}
              style={{
                width: "50%",
              }}
              onClick={handleClickFriendButton}
            />
          </Stack>
        </Stack>
      </Stack>
      <UserEditModal open={open} setOpen={setOpen} />
    </Container>
  );
};
