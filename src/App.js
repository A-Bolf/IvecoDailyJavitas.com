import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ImgList from "./ImgList";
import TopBar from "./TopBar";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {" © "}
      <Link color="inherit" href="https://ivecodailyszerviz.com/">
        Duck Teherautó Bérlés
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <main>
        {/* Hero unit */}
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
                  Gyors, rugalmas kiszolgálás, Szakmai támogatás, 0-24 órás
                  gépjármű felvétel, leadás (érvényes bérleti szerződés esetén)
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
              <Button size="large" variant="contained">
                Teherautó Bérlés
              </Button>
              <Button size="large" variant="contained">
                Iveco Daily Szervíz
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Tel.: 06 30 9401-192
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
