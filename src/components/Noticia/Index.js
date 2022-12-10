import React from "react"
import {Card, CardActions, CardContent, CardMedia, Link, Typography, Grid} from "@mui/material";

const Noticia = ({noticia}) => {
  const { urlToImage, url, title, description, source} = noticia
  return(
    <>
      <Grid item md={6} lg={4}>
      <Card>
        <CardMedia
          component={"img"}
          alt={`imagen de la noticia`}
          image={urlToImage}
          height={"250px"}
        />

        <CardContent>
          <Typography variant={"body1"} color={"error"}>{source.name}</Typography>
          <Typography variant={"h5"} component={"div"}>{title}</Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions>
          <Link href={url}
                target={"_blank"}
                variant={"button"}>
            Leer Noticia
            </Link>
        </CardActions>

      </Card>
      </Grid>


    </>
  )
}

export default Noticia