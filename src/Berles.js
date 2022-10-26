import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import ImgList from "./ImgList";
import { useNavigate } from "react-router-dom";

export default function Berles() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="md">
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Duck Teherautó Bérlés
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            <p>
              Költöztetéshez, áruszállításhoz válassza "B"-s jogosítvánnyal
              vezethető nagyplatós kisteherautóinkat!
            </p>
            <p>
              Gyors, rugalmas kiszolgálás, Szakmai támogatás, 0-24 órás gépjármű
              felvétel, leadás (érvényes bérleti szerződés esetén)
            </p>
            <p>
              Rendszeresen bérlő ügyfeleinknek kedvezményeket is biztosítunk
            </p>
          </Typography>
          <ImgList style={{ align: "center" }} />
        </Box>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button size="large" variant="contained" onClick={handleClick}>
            Iveco Daily Szervíz
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
