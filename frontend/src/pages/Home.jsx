import { Button, Container } from "@mui/material";
import { useCallback, useState } from "react";
import { UserEditModal } from "../components/UserEditModal";

export const Home = () => {
  const [open, setOpen] = useState(false);

  const onClickEditButton = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Container maxWidth="xs">
      <Button onClick={onClickEditButton}>編集する</Button>
      <UserEditModal open={open} setOpen={setOpen} />
    </Container>
  );
};
