import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TopBar from "./TopBar";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {" © "}
      <Link color="inherit" href="https://ivecodailyjavitas.com/">
        Duck Teherautó Bérlés
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function Layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <TopBar />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
        <Typography variant="body1" align="center" gutterBottom>
          Tel.: 06 30 940-1192
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
