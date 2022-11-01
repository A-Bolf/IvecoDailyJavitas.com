import * as React from "react";
import { Button, Container, Typography, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const homeNavigate = () => {
    navigate("");
  };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Stack justifyContent="center">
          <Typography element="h1" variant="h1" textAlign="center">
            Az oldal nem található
          </Typography>
          <Button size="large" variant="contained" onClick={homeNavigate}>
            Vissza a Kezdőlapra
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
