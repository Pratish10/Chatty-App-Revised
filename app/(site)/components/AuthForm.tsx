"use client";
import React, { useCallback, useState } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillGoogleCircle,
} from "react-icons/ai";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const commonStyles = {
    fullWidth: { fullWidth: true },
    disabled: { disabled: isLoading },
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const toggleVariantHandler = useCallback(() => {
    setVariant((prevVariant) =>
      prevVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  }, []);

  const renderTextField = (label: string, type: string, id: string) => (
    <Grid item xs={12} sx={{ py: 1 }}>
      <TextField
        variant="outlined"
        label={label}
        type={type}
        id={id}
        {...commonStyles.fullWidth}
        sx={{
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#414345",
            fontFamily: "Ubuntu",
          },
          "& .MuiFormLabel-root": {
            color: "#414345",
            fontFamily: "Ubuntu",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#414345",
              fontFamily: "Ubuntu",
            },
        }}
      />
    </Grid>
  );

  const renderPasswordInput = () => (
    <Grid item xs={12} sx={{ py: 1 }}>
      <FormControl
        variant="outlined"
        {...commonStyles.fullWidth}
        sx={{
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            borderColor: "#414345",
            fontFamily: "Ubuntu",
          },
          "& .MuiFormLabel-root": {
            color: "#414345",
            fontFamily: "Ubuntu",
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
            {
              borderColor: "#414345",
              fontFamily: "Ubuntu",
            },
        }}
      >
        <InputLabel htmlFor="password">Password</InputLabel>
        <OutlinedInput
          id="password"
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword} edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
    </Grid>
  );

  const renderSocialMediaButton = (text: string, icon: React.ReactElement) => (
    <Button
      sx={{
        width: "100%",
        my: 1,
        px: 2,
        fontSize: { xs: "10px", sm: "14px" },
        fontFamily: "Ubuntu",
        color: "#414345",
        borderColor: "#414345",
        "&:hover": {
          borderColor: "#414345",
        },
      }}
      variant="outlined"
      startIcon={icon}
    >
      {text}
    </Button>
  );

  const submitHandler = (event: React.FocusEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (variant === "LOGIN") {
    }

    if (variant === "REGISTER") {
    }
  };

  return (
    <Paper
      elevation={5}
      sx={{
        margin: "0 auto",
        maxWidth: "400px",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
      }}
    >
      <Box sx={{ px: 3, py: 4, mt: 3 }}>
        <form onSubmit={submitHandler}>
          <Grid container spacing={2}>
            {variant === "REGISTER" &&
              renderTextField("Username", "text", "username")}
            {renderTextField("Email", "email", "email")}
            {renderPasswordInput()}

            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                disabled={isLoading}
                fullWidth
                variant="outlined"
                type="submit"
                sx={{
                  py: 1,
                  fontSize: { xs: "10px", sm: "14px" },
                  fontFamily: "Ubuntu",
                  color: "#414345",
                  borderColor: "#414345",
                  "&:hover": {
                    borderColor: "#414345",
                  },
                }}
              >
                {variant === "LOGIN" ? "Sign In" : "Register"}
              </Button>
            </Grid>
          </Grid>
        </form>
        <Box sx={{ py: 2 }}>
          <Divider
            sx={{
              color: "#8b8b8b",
              fontSize: { xs: "10px", sm: "14px" },
              fontFamily: "Ubuntu",
            }}
          >
            Or continue with
          </Divider>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {renderSocialMediaButton("Github", <AiFillGithub />)}
          {renderSocialMediaButton("Linkedin", <AiFillLinkedin />)}
          {renderSocialMediaButton("Google", <AiFillGoogleCircle />)}
        </Box>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              py: 2,
              fontSize: { xs: "10px", sm: "14px" },
              fontFamily: "Ubuntu",
            }}
          >
            {variant === "LOGIN"
              ? "New to Chatty App?"
              : "Already have an account?"}
          </Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              py: 2,
              fontSize: { xs: "10px", sm: "14px" },
              fontFamily: "Ubuntu",
            }}
            onClick={toggleVariantHandler}
          >
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </Typography>
        </div>
      </Box>
    </Paper>
  );
};

export default AuthForm;
