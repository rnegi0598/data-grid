import React from "react";
import "./loading.scss";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";

const Loading = () => {
  return (
    <div className="loading">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 2,
          flexWrap: "wrap",
        }}
      >
        <Button loading variant="plain">
          Plain
        </Button>
      </Box>
    </div>
  );
};

export default Loading;
