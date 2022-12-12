import {
  Avatar,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
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
import { friendsContext, setFriendsContext } from "../contexts/FriendsContext";
import Peer from "skyway-js";

export const Matching = () => {
  const user = useContext(userContext);
  const friends = useContext(friendsContext);
  const setFriends = useContext(setFriendsContext);
  const navigate = useNavigate();
  const [isDisabledAddFriendButton, setIsDisabledAddFriendButton] =
    useState(false);
  const videoRef = useRef(null);
  const theirVideoRef = useRef(null);
  const [myId, setMyId] = useState();
  const [theirId, setTheirId] = useState();
  const peer = new Peer({
    key: "ee6b9a84-7ce4-4507-afd0-73008af50e2b",
  });
  let localStream;

  const setEventListener = (mediaConnection) => {
    mediaConnection.on("stream", (stream) => {
      theirVideoRef.current.srcObject = stream;
      theirVideoRef.current.play();
    });
  };

  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        localStream = stream;
      })
      .catch((error) => {
        console.error("mediaDevice.getUserMedia() error:", error);
        return;
      });

    peer.on("open", () => {
      setMyId(peer.id);
    });

    peer.on("call", (mediaConnection) => {
      mediaConnection.answer(localStream);
      setEventListener(mediaConnection);
    });
  }, []);

  const handleClickNext = useCallback(() => {}, []);

  const handleClickEnd = useCallback(() => {
    navigate("/");
  }, []);

  const handleClickAddFriend = useCallback(() => {
    const newFriends = [
      {
        id: 1,
        name: "テスト",
        sns: {
          twitter: "twitter",
          instagram: "instagram",
          facebook: "facebook",
        },
      },
    ];
    setFriends([...friends, ...newFriends]);
    setIsDisabledAddFriendButton(true);
  }, [friends]);

  const handleClickStart = useCallback(() => {
    const mediaConnection = peer.call(theirId ?? "", localStream);
    setEventListener(mediaConnection);
  }, [peer]);

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
      <div style={{ position: "absolute", zIndex: 10, visibility: "hidden" }}>
        <>myId: {myId}</>
        <br />
        <>theirId: </>
        <input
          value={theirId}
          onChange={(event) => setTheirId(event.target.value)}
        />
        <Button onClick={handleClickStart}>スタート</Button>
      </div>
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
          sx={{
            width: "65%",
            mx: "auto",
            zIndex: 1,
          }}
        >
          <Box flex={3}>
            <Avatar sx={{ width: 50, height: 50 }}>テ</Avatar>
          </Box>
          <Box flex={6}>
            <Typography variant="h6" color="white" fontWeight="bold">
              テスト
            </Typography>
          </Box>
          <Box flex={3}>
            <img
              src={AddFriendButton}
              style={{
                width: "90%",
                opacity: isDisabledAddFriendButton && 0.7,
              }}
              onClick={
                !isDisabledAddFriendButton ? handleClickAddFriend : () => {}
              }
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
      <Stack direction="row" pt={10} spacing={2} justifyContent="space-evenly">
        <Box onClick={handleClickNext} width="45%">
          <img
            src={NextButton}
            style={{
              width: "100%",
              zIndex: 5,
            }}
          />
        </Box>
        <Box onClick={handleClickEnd} width="45%">
          <img
            src={EndButton}
            style={{
              width: "100%",
              zIndex: 5,
            }}
          />
        </Box>
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
          margin: "0 auto",
          maxWidth: "444px",
          left: 0,
          right: 0,
        }}
      />
      <div style={{ position: "absolute", bottom: 0 }}>
        <video
          ref={videoRef}
          id="my-video"
          width="1px"
          height="1px"
          autoPlay
          muted
          playsInline
        ></video>
        <video
          ref={theirVideoRef}
          id="their-video"
          width="1px"
          height="1px"
          autoPlay
          playsInline
        ></video>
      </div>
    </Container>
  );
};
