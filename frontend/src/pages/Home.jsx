import { Avatar, Box, Container, Stack, Typography } from "@mui/material";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { UserEditModal } from "../components/UserEditModal";
import { userContext } from "../contexts/UserContext";

import Car from "../assets/home/car.png";
import CarMatching from "../assets/home/car_matching.png";
import EditButton from "../assets/home/edit_button.png";
import FriendButton from "../assets/home/friend_button.png";
import Title from "../assets/home/title.png";
import { useNavigate } from "react-router-dom";
import Peer from "skyway-js";

export const Home = () => {
  const user = useContext(userContext);
  const [open, setOpen] = useState(false);
  const [isMatching, setIsMatching] = useState(false);
  const navigate = useNavigate();
  // const videoRef = useRef(null);
  // const theirVideoRef = useRef(null);
  // const [myId, setMyId] = useState();
  // const [theirId, setTheirId] = useState();
  // // axios.defaults.headers.common["content-type"] = "application/json";
  // const peer = new Peer({
  //   key: "ee6b9a84-7ce4-4507-afd0-73008af50e2b",
  // });
  // let localStream;

  // const setEventListener = (mediaConnection) => {
  //   mediaConnection.on("stream", (stream) => {
  //     theirVideoRef.current.srcObject = stream;
  //     theirVideoRef.current.play();
  //   });
  // };

  // useEffect(() => {
  //   navigator.mediaDevices
  //     .getUserMedia({ video: false, audio: true })
  //     .then((stream) => {
  //       videoRef.current.srcObject = stream;
  //       videoRef.current.play();
  //       localStream = stream;
  //     })
  //     .catch((error) => {
  //       console.error("mediaDevice.getUserMedia() error:", error);
  //       return;
  //     });

  //   peer.on("open", () => {
  //     setMyId(peer.id);
  //   });

  //   peer.on("call", (mediaConnection) => {
  //     mediaConnection.answer(localStream);
  //     setEventListener(mediaConnection);
  //   });
  // }, []);

  // const handleClickEditButton = useCallback(() => {
  //   setOpen(!open);
  // }, [open]);

  const handleClickCarButton = useCallback(async () => {
    // setIsMatching(!isMatching);
    // const mediaConnection = peer.call(
    //   theirId ?? "9CubKYWBsLAMv7So",
    //   localStream
    // );
    // setEventListener(mediaConnection);
    // await axios
    //   .post(
    //     "http://34.125.227.230:8000/caller1/",
    //     {
    //       name: "Title",
    //       pass: "Body",
    //     },
    //     // {
    //     //   headers: {
    //     //     "Content-Type": "application/json",
    //     //     "Access-Control-Allow-Origin": "*",
    //     //   },
    //     // }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
    // await axios
    //   .get("https://reqres.in/api/users?page=2")
    //   .then((res) => console.log(res))
    //   .catch((e) => console.log(e));
    // await fetch("http://34.125.227.230:8000/caller1", {
    //   method: "POST",
    //   body: JSON.stringify({ name: "Title", pass: "Body" }),
    //   headers: { "Content-Type": "application/json" },
    //   mode: "cors",
    // })
    //   .then((res) => console.log(res.json()))
    //   .catch((e) => console.log(e));
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
      {/* <>myId: {myId}</>
      <br />
      <>theirId: </>
      <input
        value={theirId}
        onChange={(event) => setTheirId(event.target.value)}
      /> */}
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
      {/* <video
        ref={videoRef}
        id="my-video"
        // width="400px"
        autoPlay
        muted
        playsinline
      ></video>
      <video
        ref={theirVideoRef}
        id="their-video"
        // width="400px"
        autoPlay
        playsinline
      ></video> */}
    </Container>
  );
};
