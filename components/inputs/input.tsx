"use client";

import { Box } from "@mui/material";
import React from "react";

interface InputProps {
  id: string;
  label: string;
  type: string;
  required: boolean;
}

const Input: React.FC<InputProps> = ({ id, label, type, required }) => {
  return (
    <Box>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} required={required} />
    </Box>
  );
};

export default Input;
