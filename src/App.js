import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

export default function Szerviz() {
  const navigate = useNavigate();
  const kapcsolatNavigate = () => {
    navigate("/kapcsolat");
  };
  const berlesNavigate = () => {
    navigate("/berles");
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
            Iveco Daily Tehergépjárművek Szervizelése
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
          >
            Szervizünk az Iveco Daily típusú haszon-gépjárművekre
            specializálódott, melyek karbantartását teljeskörű szolgáltatással
            vállaljuk több évtizedes tapasztalattal a kezünkben. A szerviz
            idejére, illetve azon kívül is nálunk lehetőség van B kategóriás
            jogosítvánnyal vezethető Iveco Daily kisteherautók bérlésre is -
            hátfalas vagy ponyvás változatban
            <br></br>
            <b>Továbbá vállaljuk hátfalak javítását.</b>
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              size="large"
              variant="contained"
              onClick={kapcsolatNavigate}
            >
              Kérjen ajánlatot
            </Button>
            <br></br>
            <Button size="large" variant="contained" onClick={berlesNavigate}>
              A bérlésről bővebben
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
