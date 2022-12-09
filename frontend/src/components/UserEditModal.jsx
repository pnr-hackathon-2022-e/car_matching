import {
  Button,
  Dialog,
  DialogContent,
  Divider,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useContext, useEffect, useMemo } from "react";
import { Controller, useForm } from "react-hook-form";
import { setUserContext, userContext } from "../contexts/UserContext";
import BasicInfo from "../assets/home/basic_info.png";
import SNS from "../assets/home/sns.png";

export const UserEditModal = ({ open, setOpen }) => {
  const user = useContext(userContext);
  const setUser = useContext(setUserContext);

  const defaultValues = useMemo(
    () => ({
      name: user?.name ?? "",
      sns: {
        twitter: user?.sns?.twitter ?? "",
        instagram: user?.sns?.instagram ?? "",
        facebook: user?.sns?.facebook ?? "",
      },
    }),
    [user]
  );

  const { control, handleSubmit, reset } = useForm({
    defaultValues: defaultValues,
  });

  useEffect(() => {
    reset({ ...defaultValues });
  }, [user]);

  const handleClose = useCallback(() => {
    setOpen(false);
    reset();
  }, [reset]);

  const onSubmit = useCallback((input) => {
    setUser(input);
    handleClose();
  }, []);

  return (
    <Dialog open={open} onClose={handleClose} fullWidth>
      <DialogContent>
        <Stack spacing={2}>
          <Typography variant="subtitle1">
            <img
              src={BasicInfo}
              style={{
                width: "30%",
              }}
            />
          </Typography>
          <Controller
            name="name"
            control={control}
            rules={{ required: "ニックネームを入力してください" }}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="ニックネーム"
                placeholder="くるまっち"
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          {/* <Controller
            name="avatar"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="アバター"
                variant="outlined"
                error={fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          /> */}
          <Divider />
          <Typography variant="subtitle1">
            <img
              src={SNS}
              style={{
                width: "30%",
              }}
            />
          </Typography>
          <Controller
            name="sns.twitter"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="Twitter"
                variant="outlined"
                placeholder="twitter"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      https://twitter.com/
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ shrink: true }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="sns.instagram"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="Instagram"
                variant="outlined"
                placeholder="instagram"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      https://instagram.com/
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{
                  shrink: true,
                }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Controller
            name="sns.facebook"
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                type="text"
                label="Facebook"
                variant="outlined"
                placeholder="facebook"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      https://facebook.com/
                    </InputAdornment>
                  ),
                }}
                InputLabelProps={{ shrink: true }}
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />
          <Stack direction="row" spacing={2} justifyContent="center">
            <Button variant="outlined" onClick={handleClose}>
              キャンセル
            </Button>
            <Button variant="contained" onClick={handleSubmit(onSubmit)}>
              保存する
            </Button>
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
