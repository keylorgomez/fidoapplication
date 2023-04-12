import React, { useState } from "react";
import { Box } from "@mui/material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import AddCircleOutlineRoundedIcon from "@mui/icons-material/AddCircleOutlineRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import ConfirmationNumberRoundedIcon from "@mui/icons-material/ConfirmationNumberRounded";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import BookOnlineRoundedIcon from "@mui/icons-material/BookOnlineRounded";
import SupervisorAccountRoundedIcon from "@mui/icons-material/SupervisorAccountRounded";
import GroupsRoundedIcon from "@mui/icons-material/GroupsRounded";
import DomainRoundedIcon from "@mui/icons-material/DomainRounded";
import AddBusinessRoundedIcon from '@mui/icons-material/AddBusinessRounded';
import { useNavigate } from "react-router-dom";

function ListaSlideBar() {
  const navigate = useNavigate();
  const LogOut = () => {
    navigate("/");
  };
  const Pets = () => {
    navigate("/pets");
  };

  const Servicios = () => {
    navigate("/servicios-negocio");
  };

  const UserProfile = () => {
    navigate("/perfil-usuario");
  };

  const BusinessProfile = () => {
    navigate("/perfil-negocio");
  };

  const UserReservation = () => {
    navigate("/reservas-usuario");
  };

  const BusinessReservation = () => {
    navigate("/reservas-negocio");
  };

  const BusinessListApp = () => {
    navigate("/negocios-asociados");
  };

  const ClientsListApp = () => {
    navigate("/clientes-asociados");
  };

  const GestioPromos = () => {
    navigate("/promocion-noticias");
  };

  const RegisterBusiness = () => {
    navigate("/registrar-negocio");
  };

  const [openProfile, setOpenProfile] = React.useState(false);
  const [openNegocio, setOpenNegocio] = React.useState(false);
  const [openAdmin, setOpenAdmin] = React.useState(false);

  const handleClickProfile = () => {
    setOpenProfile(!openProfile);
  };
  const handleClickNegocio = () => {
    setOpenNegocio(!openNegocio);
  };
  const handleClickAdmin = () => {
    setOpenAdmin(!openAdmin);
  };
  return (
    <List
      sx={{ width: "100%", maxWidth: "220px", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          sx={{ fontWeight: "bold" }}
          component="div"
          id="nested-list-subheader"
        >
          Menú
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClickProfile}>
        <ListItemIcon>
          <AccountCircleRoundedIcon sx={{ fontSize: "25px" }} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
          primary="Gestionar cuenta"
        />
        {openProfile ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openProfile} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }} onClick={() => UserProfile()}>
            <ListItemIcon>
              <EditRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Editar perfil"
            />
          </ListItemButton>

          <ListItemButton sx={{ pl: 3 }} onClick={() => Pets()}>
            <ListItemIcon>
              <PetsRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Mis mascotas"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => UserReservation()}>
            <ListItemIcon>
              <ConfirmationNumberRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Mis reservas"
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickNegocio}>
        <ListItemIcon>
          <StoreRoundedIcon sx={{ fontSize: "25px" }} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
          primary="Gestionar negocio"
        />
        {openNegocio ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openNegocio} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }} onClick={()=>BusinessProfile()}>
            <ListItemIcon>
              <AppRegistrationRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Editar negocio"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => Servicios()}>
            <ListItemIcon>
              <AddCircleOutlineRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Gestión de servicios"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => BusinessReservation()}>
            <ListItemIcon>
              <BookOnlineRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Gestión de reservas"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => GestioPromos()}>
            <ListItemIcon>
              <ReceiptRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Promociones/Noticias"
            />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickAdmin}>
        <ListItemIcon>
          <SupervisorAccountRoundedIcon sx={{ fontSize: "25px" }} />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
          primary="Administración"
        />
        {openAdmin ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openAdmin} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 3 }} onClick={() => ClientsListApp()}>
            <ListItemIcon>
              <GroupsRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Clientes"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => BusinessListApp()}>
            <ListItemIcon>
              <DomainRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Negocios"
            />
          </ListItemButton>
          <ListItemButton sx={{ pl: 3 }} onClick={() => RegisterBusiness()}>
            <ListItemIcon>
              <AddBusinessRoundedIcon sx={{ fontSize: "20px" }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ style: { fontSize: "0.7rem" } }}
              primary="Registrar Negocio"
            />
          </ListItemButton>
        </List>
      </Collapse>

      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "220px",
          marginBottom: 1,
          backgroundColor:'#fff'
        }}
      >
        <ListItemButton onClick={() => LogOut()}>
          <ListItemIcon>
            <LogoutRoundedIcon sx={{ fontSize: "20px" }} />
          </ListItemIcon>
          <ListItemText
            primaryTypographyProps={{ style: { fontSize: "0.8rem" } }}
            primary="Cerrar sesión"
          />
        </ListItemButton>
      </Box>
    </List>
  );
}

export default ListaSlideBar;
