import React from "react";
import { Button } from "@mui/material";
import "./style.css";

function AppServices() {
  return (
    <div className="primaryContainer">
      <div className="AppServices">
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          autoFocus
          className="buttonServices"
        >
          General
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          className="buttonServices"
        >
          Hotel
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          className="buttonServices"
        >
          Grooming
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          className="buttonServices"
        >
          Entrenamiento
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          className="buttonServices"
        >
          Guardería
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          className="buttonServices"
        >
          Veterinaria
        </Button>
        <Button
          variant="text"
          color="inherit"
          style={{
            borderRadius: "1.2rem",
            textTransform: "none",
            margin: "0 1rem",
            fontWeight: "bold",
          }}
          className="buttonServices"
        >
          Comida
        </Button>
      </div>
    </div>
  );
}

export default AppServices;
