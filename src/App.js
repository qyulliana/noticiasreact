import './App.css';
import {Container, Grid, Typography} from "@mui/material";
import Formulario from "./components/Formulario/Index";
import {NoticiasProvider} from "./components/context/NoticiasProvider";
import ListadoNoticias from "./components/ListadoNoticias/Index";

function App() {
  return (
    <>
      <NoticiasProvider>
      <Container>
        <header>
          <Typography align={"center"} marginY={5} component={"h1"} variant={"h3"}>
            Buscador de noticias
          </Typography>
        </header>
        <Grid
         container
         direction={"row"}
         justifyContent={"center"}
         alignItems={"center"}
        >
          <Grid item xs={12} md={6} lg={4}>
            <Formulario/>
          </Grid>
        </Grid>
      </Container>
        <ListadoNoticias/>
      </NoticiasProvider>
    </>
  );
}

export default App;
