import { Button } from "@mui/material";
import { useCallback, useState } from "react";
import { UserEditModal } from "../components/UserEditModal";

export const Home = () => {
  const [open, setOpen] = useState(false);

  const onClickEditButton = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <>
      <Button onClick={onClickEditButton}>編集する</Button>
      <UserEditModal open={open} setOpen={setOpen} />
    </>
  );
};
