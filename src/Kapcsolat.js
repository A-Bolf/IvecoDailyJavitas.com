import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import PhoneIcon from "@mui/icons-material/Phone";
import PinDropIcon from "@mui/icons-material/PinDrop";
import StarIcon from "@mui/icons-material/Star";

export default function Kapcsolat() {
  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h4"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Vegye Fel Velünk a Kapcsolatot:
        </Typography>
        <Container sx={{ width: "85%" }}>
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
              <StarIcon />
              Duck Teherautó Szervíz
              <br></br>
              <PinDropIcon />
              Budapest 1106 Keresztúri út 122
              <br></br>
              <PhoneIcon />
              06 30 940-1192
            </Typography>
          </Card>
        </Container>
      </Container>
    </Box>
  );
}
