import { Avatar, Box, Container, Grid, IconButton, Stack } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import Title from "../assets/friends/title.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";

export const Friends = () => {
  const [friends, setFriends] = useState(
    JSON.parse(localStorage.getItem("friends"))
  );

  const handleClickTwitter = useCallback(
    (friend) =>
      (window.location.href = `https://twitter.com/${friend?.sns?.twitter}`),
    []
  );

  const handleClickInstagram = useCallback(
    (friend) =>
      (window.location.href = `https://instagram.com/${friend?.sns?.twitter}`),
    []
  );

  const handleClickFacebook = useCallback(
    (friend) =>
      (window.location.href = `https://facebook.com/${friend?.sns?.twitter}`),
    []
  );

  return (
    <Container
      maxWidth="xs"
      sx={{
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
      <Stack spacing={2} mt={3}>
        {friends?.map((friend) => (
          <Grid container alignItems="center">
            <Grid item xs={3}>
              <Avatar sx={{ width: 60, height: 60 }}>{friend?.name[0]}</Avatar>
            </Grid>
            <Grid item xs={4}>
              {friend?.name}
            </Grid>
            <Grid item xs={5}>
              <Grid container justifyContent="flex-end">
                {friend?.sns?.twitter && (
                  <Grid item>
                    <IconButton onClick={() => handleClickTwitter(friend)}>
                      <TwitterIcon />
                    </IconButton>
                  </Grid>
                )}
                {friend?.sns?.instagram && (
                  <Grid item>
                    <IconButton onClick={() => handleClickInstagram(friend)}>
                      <InstagramIcon />
                    </IconButton>
                  </Grid>
                )}
                {friend?.sns?.facebook && (
                  <Grid item>
                    <IconButton onClick={() => handleClickFacebook(friend)}>
                      <FacebookIcon />
                    </IconButton>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Grid>
        ))}
      </Stack>
    </Container>
  );
};
