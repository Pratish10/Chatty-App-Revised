import { Box, Typography } from "@mui/material";
import React from "react";
import AuthForm from "./components/AuthForm";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(to right, #acb6e5, #86fde8)",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          sx={{
            fontFamily: "Pixelify Sans",
            fontSize: { xs: "24px", sm: "36px" },
          }}
        >
          Welcome to Chatty App
        </Typography>

        <Typography sx={{ fontSize: { xs: "16px", sm: "20px" } }}>
          Sign in to your account
        </Typography>
      </Box>
      <Box>
        <AuthForm />
      </Box>
    </div>
  );
};

export default Home;
