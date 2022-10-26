import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";

export default function Kapcsolat() {
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
            variant="h4"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Vegye Fel Velünk a Kapcsolatot:
          </Typography>
          <Card raised>
            <Typography
              sx={{
                margin: "10px",
                bgcolor: "background.paper",
                lineHeight: "45px",
              }}
              component="p"
              variant="h5"
              align="center"
              color="text.primary"
            >
              Duck Teherautó Szervíz
              <br></br>
              Keresztúri út 122
              <br></br>
              06 30 940-1192
            </Typography>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
